import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber'; {/*This is empty canvas */ }
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'; {/*Helpers to build canvas */ }
import CanvasLoader from '../Loader';


const Computers = ({ isMobile }) => {
  //Importing the whole obejct - Computer - Downloaded from SketchFab - Explore - Downloadable
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    // When starting with three js component, start with mesh tag 
    <mesh>
      <hemisphereLight intensity={2} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />

      {/* Using the object imported using GLTF  */}
      <primitive object={computer.scene} scale={isMobile ? 0.7 : 0.75} position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);


  // creating useEffect for changing isMobile variabble
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the initial state of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);

    // Define a call back function to handle changes to the media Query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    // In react, we have to add event listener and then remove it. It is compulsory! 

    // Add the callback function as a listener for changes to the media Query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);


  return (
    <Canvas frameloop='demand' shadows dpr={[1, 2]} camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} //This will help rotate around a axis and not up and down

        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;