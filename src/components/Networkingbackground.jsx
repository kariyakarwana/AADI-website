// NetworkingBackground.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const NODE_COUNT = 100;
const DISTANCE_THRESHOLD = 25;

// Generate random 3D positions
const generateNodes = () => {
  const nodes = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    nodes.push({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1
      ),
    });
  }
  return nodes;
};

const NetworkingParticles = () => {
  const [nodes] = useState(generateNodes);
  const lineRef = useRef();
  const pointsRef = useRef();

  useFrame(() => {
    const positions = pointsRef.current.geometry.attributes.position.array;
    const lines = [];

    // Move particles
    nodes.forEach((node, i) => {
      node.position.add(node.velocity);

      ['x', 'y', 'z'].forEach((axis) => {
        if (node.position[axis] > 25 || node.position[axis] < -25) {
          node.velocity[axis] *= -1;
        }
      });

      positions[i * 3] = node.position.x;
      positions[i * 3 + 1] = node.position.y;
      positions[i * 3 + 2] = node.position.z;
    });

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Draw lines between close nodes
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position);
        if (dist < DISTANCE_THRESHOLD) {
          lines.push(nodes[i].position.x, nodes[i].position.y, nodes[i].position.z);
          lines.push(nodes[j].position.x, nodes[j].position.y, nodes[j].position.z);
        }
      }
    }

    lineRef.current.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(lines), 3)
    );
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodes.length}
            array={new Float32Array(nodes.flatMap(n => [n.position.x, n.position.y, n.position.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#00ffcc" size={0.5} sizeAttenuation />
      </points>

      <lineSegments ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#00ffcc" transparent opacity={0.3} />
      </lineSegments>
    </>
  );
};

const NetworkingBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1]">
      <Canvas camera={{ position: [0, 0, 60], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <NetworkingParticles />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
};

export default NetworkingBackground;
