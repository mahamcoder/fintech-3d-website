import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// ── Palette ──────────────────────────────────────────────────────────────────
const TEAL_LIGHT  = new THREE.Color('#92d5d8');
const TEAL_MID    = new THREE.Color('#59918F');
const DARK_GREEN  = new THREE.Color('#052e23');
const WHITE       = new THREE.Color('#ffffff');

// ── Node positions ────────────────────────────────────────────────────────────
const NODE_CONFIGS = [
  { pos: [0,    0,    0  ], radius: 0.55, color: TEAL_LIGHT,  distort: 0.55, speed: 1.2 },
  { pos: [2.2,  1.1,  -0.8], radius: 0.32, color: TEAL_MID,   distort: 0.45, speed: 1.6 },
  { pos: [-1.8, 1.4, -0.5], radius: 0.25, color: WHITE,       distort: 0.40, speed: 2.0 },
  { pos: [1.3, -1.6, -0.3], radius: 0.28, color: TEAL_MID,   distort: 0.50, speed: 1.8 },
  { pos: [-1.4,-1.2,  0.4], radius: 0.20, color: TEAL_LIGHT,  distort: 0.60, speed: 2.2 },
  { pos: [3.0, -0.5, -1.2], radius: 0.18, color: WHITE,       distort: 0.35, speed: 1.4 },
  { pos: [-2.6, 0.3, -1.0], radius: 0.22, color: TEAL_MID,   distort: 0.42, speed: 1.9 },
  { pos: [0.8,  2.5, -0.6], radius: 0.15, color: TEAL_LIGHT,  distort: 0.50, speed: 2.5 },
];

// ── Filament connections (index pairs) ───────────────────────────────────────
const CONNECTIONS = [
  [0,1],[0,2],[0,3],[0,4],[1,2],[1,5],[2,6],[3,4],[3,5],[4,6],[1,7],[2,7],
];

// ── Glowing Filament ──────────────────────────────────────────────────────────
const Filament = ({ start, end, color = TEAL_LIGHT, opacity = 0.35 }) => {
  const ref = useRef();

  const { positions, mid } = useMemo(() => {
    const s = new THREE.Vector3(...start);
    const e = new THREE.Vector3(...end);
    const mid = new THREE.Vector3().lerpVectors(s, e, 0.5);
    mid.y += (Math.random() - 0.5) * 0.6;
    // Build a smooth curve
    const curve = new THREE.QuadraticBezierCurve3(s, mid, e);
    const pts = curve.getPoints(40);
    const positions = new Float32Array(pts.length * 3);
    pts.forEach((p, i) => { positions[i*3]=p.x; positions[i*3+1]=p.y; positions[i*3+2]=p.z; });
    return { positions, mid };
  }, []);

  useFrame(({ clock }) => {
    if (ref.current?.material) {
      ref.current.material.opacity = opacity * (0.6 + 0.4 * Math.sin(clock.elapsedTime * 1.5));
    }
  });

  return (
    <line ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length/3} itemSize={3} />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={opacity} linewidth={1} />
    </line>
  );
};

// ── Floating Orb ─────────────────────────────────────────────────────────────
const Orb = ({ pos, radius, color, distort, speed }) => {
  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={0.5}>
      <mesh position={pos} castShadow>
        <sphereGeometry args={[radius, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={speed * 0.8}
          roughness={0.05}
          metalness={0.1}
          transparent
          opacity={0.82}
          envMapIntensity={1.2}
        />
      </mesh>
      {/* Inner glow shell */}
      <mesh position={pos}>
        <sphereGeometry args={[radius * 1.18, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.07} side={THREE.BackSide} />
      </mesh>
    </Float>
  );
};

// ── Animated Ring ─────────────────────────────────────────────────────────────
const SpinRing = ({ pos, radius, color, tiltX = 0, tiltZ = 0 }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = clock.elapsedTime * 0.4;
  });
  return (
    <mesh ref={ref} position={pos} rotation={[tiltX, 0, tiltZ]}>
      <torusGeometry args={[radius, 0.012, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.35} />
    </mesh>
  );
};

// ── Particle Field ─────────────────────────────────────────────────────────────
const ParticleField = ({ count = 180 }) => {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i*3]   = (Math.random() - 0.5) * 10;
      arr[i*3+1] = (Math.random() - 0.5) * 8;
      arr[i*3+2] = (Math.random() - 0.5) * 6 - 2;
    }
    return arr;
  }, [count]);

  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color={TEAL_LIGHT} size={0.025} transparent opacity={0.55} sizeAttenuation />
    </points>
  );
};

// ── Scene Root ────────────────────────────────────────────────────────────────
const SceneInner = () => {
  const groupRef = useRef();

  useFrame(({ clock, mouse }) => {
    if (groupRef.current) {
      // Gentle idle rotation
      groupRef.current.rotation.y = clock.elapsedTime * 0.08;
      // Subtle mouse tracking
      groupRef.current.rotation.x += (mouse.y * -0.08 - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <ParticleField />

      {/* Nodes */}
      {NODE_CONFIGS.map((cfg, i) => (
        <Orb key={i} {...cfg} />
      ))}

      {/* Filaments */}
      {CONNECTIONS.map(([a, b], i) => (
        <Filament
          key={i}
          start={NODE_CONFIGS[a].pos}
          end={NODE_CONFIGS[b].pos}
          color={i % 3 === 0 ? TEAL_MID : TEAL_LIGHT}
          opacity={0.28 + (i % 4) * 0.06}
        />
      ))}

      {/* Decorative rings */}
      <SpinRing pos={[0, 0, 0]}   radius={1.3}  color={TEAL_LIGHT}  tiltX={Math.PI/4}  tiltZ={0.3} />
      <SpinRing pos={[0, 0, 0]}   radius={2.1}  color={TEAL_MID}    tiltX={-Math.PI/6} tiltZ={0.8} />
      <SpinRing pos={[2.2,1.1,-0.8]} radius={0.6} color={WHITE}   tiltX={Math.PI/3}  tiltZ={-0.4}/>
    </group>
  );
};

// ── Exported Canvas ───────────────────────────────────────────────────────────
export const HeroScene = () => (
  <Canvas
    camera={{ position: [0, 0, 8], fov: 55 }}
    style={{ width: '100%', height: '100%', background: 'transparent' }}
    gl={{ alpha: true, antialias: true }}
    dpr={[1, 2]}
  >
    <ambientLight intensity={0.6} color={WHITE} />
    <directionalLight position={[5, 5, 5]} intensity={1.2} color={TEAL_LIGHT} />
    <directionalLight position={[-5, -3, -3]} intensity={0.4} color={DARK_GREEN} />
    <pointLight position={[0, 0, 3]} intensity={0.8} color={TEAL_MID} distance={8} />
    <SceneInner />
  </Canvas>
);
