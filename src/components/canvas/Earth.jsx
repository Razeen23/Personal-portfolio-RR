import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DirectionalLight, PointLight } from "three"; // Import lights from Three.js



import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  //const earth = useGLTF("./attack_robot/scene.gltf");
  //const earth = useGLTF("./microphone/scene.gltf");
  //const earth = useGLTF("./adamHead/adamHead.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 20,
        position: [-4, 3, 6],
      }}
    >
<ambientLight intensity={0.5} />

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

      {/* Instantiate DirectionalLight */}
      <primitive object={new DirectionalLight(0xffffff, 20)} position={[10, 10, 10]} />

      {/* Instantiate PointLight */}
      <primitive object={new PointLight(0xffffff, 20)} position={[-10, 10, 60]} />
    </Canvas>
  );
};

export default EarthCanvas;
