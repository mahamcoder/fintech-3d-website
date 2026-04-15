import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, TorusKnot, MeshTransmissionMaterial, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function IridescentKnot() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const targetX = state.pointer.x * 0.5;
    const targetY = state.pointer.y * 0.5;

    meshRef.current.rotation.x += 0.05 * (targetY - meshRef.current.rotation.x);
    meshRef.current.rotation.y += 0.05 * (targetX - meshRef.current.rotation.y);
    meshRef.current.rotation.z += delta * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1.5}>
      <TorusKnot ref={meshRef} args={[1.5, 0.6, 256, 128, 2, 5]} scale={1.0}>
        <MeshTransmissionMaterial
          backside
          backsideRoughness={0.1}
          backsideThickness={1.5}
          thickness={1.5}
          chromaticAberration={0.05}
          anisotropy={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={2}
          color="#D9FF43" // Sapforce Lime Core
          transmission={0.9}
          roughness={0.1}
          ior={1.4}
          iridescence={1}
          iridescenceIOR={1.5}
          iridescenceThicknessRange={[100, 400]}
          metalness={0.8} // Metallic finish
        />
      </TorusKnot>
    </Float>
  );
}

const Rig = () => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 0.5, mouse.y * 0.5, camera.position.z), 0.05);
    camera.lookAt(0, 0, 0);
  });
};

export const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        {/* Transparent background is handled by the parent container's white bg */}
        <ambientLight intensity={1} />

        {/* Bright, clean lighting for Sapforce theme */}
        <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={1.5} color="#ffffff" />
        <spotLight position={[5, 10, 5]} intensity={1} color="#ffffff" penumbra={1} />

        <Environment preset="studio" />

        <Sparkles count={40} scale={12} size={1} speed={0.3} opacity={0.3} color="#D9FF43" />

        <group position={[0, 0, 0]}>
          <IridescentKnot />
        </group>
        <Rig />
      </Canvas>
    </div>
  );
};