import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import CanvasLoader from "../Loader";

const NightSky = ({ isMobile }) => {
  const computer = useGLTF("/night_sky_visible_spectrum_monochromatic/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 2.45 : 2.5}
        position={isMobile ? [0, -2.3, -2.2] : [0, -2.3, -1.5]}
        rotation={[-0.1, -0.1, -0]}
      />
    </mesh>
  );
};


const NightSkyCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          target={[-0.1, 0, -2]}
        />
        <NightSky isMobile={isMobile} />
      </Suspense>
     
      <Preload all />
    </Canvas>
  );
};

export default NightSkyCanvas;