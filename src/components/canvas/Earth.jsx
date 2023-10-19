import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("/jupiter.glb");

  return (
    <mesh>
    <ambientLight intensity={2}  />
    <hemisphereLight intensity={1} groundColor="black"/>

    <primitive
      object={earth.scene}
      scale={1.4}
      position={ [0, 0, 0]}
      rotation={[0, 0, -0]}
    />
  </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <div
    className="w-[500px] h-[450px]" 
    >
      <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
    <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
    </div>
  );
};

export default EarthCanvas;