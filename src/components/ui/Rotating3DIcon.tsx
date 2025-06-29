
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

interface Rotating3DIconProps {
  icon: string;
  color?: string;
  size?: number;
}

function RotatingText({ text, color = "#3b82f6" }: { text: string; color?: string }) {
  const textRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      textRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.1}>
      <group ref={textRef}>
        <Text
          fontSize={1}
          color={color}
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff"
        >
          {text}
        </Text>
      </group>
    </Float>
  );
}

const Rotating3DIcon = ({ icon, color = "#3b82f6", size = 150 }: Rotating3DIconProps) => {
  return (
    <div style={{ width: size, height: size }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <RotatingText text={icon} color={color} />
      </Canvas>
    </div>
  );
};

export default Rotating3DIcon;
