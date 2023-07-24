import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, ScrollControls, OrbitControls } from "@react-three/drei";

import Model from "../components/threeJs/model";

export default function Test() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows camera={{ fov: 50, position: [0, 0, 3] }}>
        <Stage preset="rembrandt" intensity={1} environment="city"></Stage>
        <ScrollControls pages={2} damping={0.25}>
          <Model />
        </ScrollControls>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
