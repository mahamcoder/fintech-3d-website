import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Icosahedron, 
  MeshTransmissionMaterial, 
  MeshDistortMaterial, 
  Float, 
  Environment, 
  ContactShadows,
  Sphere
} from '@react-three/drei';
import * as THREE from 'three';

// ── Constants & Palette ───────────────────────────────────────────────────────
const DEEP_BLUE = new THREE.Color('#0000ff');
const VIBRANT_PURPLE = new THREE.Color('#9333ea');
const BRIGHT_WHITE = new THREE.Color('#ffffff');

// ── Internal Bubbles (Cells) ────────────────────────────────────────────────
const InternalBubbles = ({ count = 12 }) => {
  const groupRef = useRef();
  
  const bubbleData = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      position: [
        (Math.random() - 0.5) * 1.8,
        (Math.random() - 0.5) * 1.8,
        (Math.random() - 0.5) * 1.8
      ],
      speed: 0.8 + Math.random() * 1.5,
      scale: 0.12 + Math.random() * 0.18,
      offset: Math.random() * Math.PI * 2
    }));
  }, [count]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const { speed, offset } = bubbleData[i];
        const t = state.clock.elapsedTime * speed + offset;
        child.position.y += Math.sin(t) * 0.003;
        child.position.x += Math.cos(t) * 0.003;
        child.scale.setScalar(bubbleData[i].scale * (1 + Math.sin(t * 0.5) * 0.1));
      });
    }
  });

  return (
    <group ref={groupRef}>
      {bubbleData.map((data, i) => (
        <Sphere key={i} args={[1, 16, 16]} position={data.position} scale={data.scale}>
          <meshBasicMaterial color={BRIGHT_WHITE} toneMapped={false} />
        </Sphere>
      ))}
    </group>
  );
};

// ── Liquid Blob Body ────────────────────────────────────────────────────────
const LiquidBlob = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const { mouse } = state;
    if (meshRef.current) {
      // Gentle reactive tilt
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouse.y * 0.3, 0.1);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouse.x * 0.3, 0.1);
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.2}>
      <group>
        {/* Main Fluid Body */}
        <Icosahedron ref={meshRef} args={[1, 15]} scale={2.8}>
          <MeshTransmissionMaterial
            /* High-fidelity transmission for the "liquid glass" look */
            transmission={1.0}
            thickness={2.0}
            roughness={0.01}
            chromaticAberration={0.4}
            anisotropy={0.2}
            /* DISTORTION TUNING: Large, smooth curves */
            distortion={1.4} 
            distortionScale={0.25} 
            temporalDistortion={0.15}
            /* Colors matched to GIF */
            color={DEEP_BLUE}
            backside
            backsideThickness={1.5}
            ior={1.25}
          />
          {/* Inner purple liquid layer for depth/color variation */}
          <MeshDistortMaterial
            speed={3.5}
            distort={0.8}
            color={VIBRANT_PURPLE}
            transparent
            opacity={0.3}
            depthWrite={false}
          />
        </Icosahedron>

        {/* Animated Internal Bubbles */}
        <InternalBubbles count={12} />
      </group>
    </Float>
  );
};

// ── Scene Root ───────────────────────────────────────────────────────────────
const SceneRoot = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      
      {/* Dynamic spot lights to mimic GIF highlights */}
      <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={4} color={BRIGHT_WHITE} />
      <spotLight position={[-10, 5, 8]} angle={0.15} penumbra={1} intensity={2} color={VIBRANT_PURPLE} />
      <pointLight position={[0, -5, 5]} intensity={1.5} color={DEEP_BLUE} />

      <LiquidBlob />

      <Environment preset="city" />
      
      <ContactShadows 
        position={[0, -3.8, 0]} 
        opacity={0.3} 
        scale={10} 
        blur={2} 
        far={4} 
      />
    </>
  );
};

// ── Main Component ──────────────────────────────────────────────────────────
export const HeroScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 2]}
      gl={{ 
        alpha: true, 
        antialias: true,
        preserveDrawingBuffer: true 
      }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <SceneRoot />
    </Canvas>
  );
};
