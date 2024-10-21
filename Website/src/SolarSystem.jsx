import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useFBX, useTexture } from "@react-three/drei";
import { useRef } from "react";
import React from "react";

function Planet({ position, scale }) {
  // Load the FBX model and texture
  const fbx = useFBX("/planets/Earth.FBX"); // Path should be relative to the public directory
  const texRes = 512; // Texture resolution
  const texture = useTexture(`/planets/textures/${texRes}/Earth_${texRes}.png`); // Path to your texture

  if (!fbx) return null;

  // Assign the texture to the material of the planet
  fbx.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture; // Apply the texture
      child.material.needsUpdate = true; // Update the material to reflect changes
    }
  });

  fbx.position.set(position[0], position[1] - 1, position[2]);
  fbx.scale.set(scale, scale, scale);

  useFrame((state, delta) => {
    fbx.rotation.y += delta;
  });

  return <primitive object={fbx} />;
}

// Main Solar System component
export function SolarSystem() {
  return (
    <Canvas>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} />
      <Planet position={[0,0,0]} scale={0.05} />
      <Stars radius={100} depth={50} count={5000} factor={4} />
      <OrbitControls />
    </Canvas>
  );
}

// Preload the FBX model for better performance
useFBX.preload("/planets/Earth.FBX");
