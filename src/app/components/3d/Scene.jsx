"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, Sphere, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function AnimatedShape() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
    
    // Slight mouse follow
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      (state.mouse.x * state.viewport.width) / 10,
      0.05
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      (state.mouse.y * state.viewport.height) / 10,
      0.05
    );
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#8b5cf6" // Primary Violet
          wireframe
          emissive="#3b82f6"
          emissiveIntensity={0.5}
        />
      </mesh>
      <Sphere args={[1.2, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#3b82f6" // Secondary Blue
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-full absolute inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Environment preset="city" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <AnimatedShape />
        </Suspense>
      </Canvas>
    </div>
  );
}
