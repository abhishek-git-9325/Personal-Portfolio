import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Loader from '../Loader'

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');
  return (
    <mesh>
      <ambientLight />
      <hemisphereLight intensity={1} />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive object={earth.scene} scale={2.5} rotation-y={0} position-y={0}/>
    </mesh>
  )
}

const EarthCanvas = () =>{
  return(
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
      gl={{ preserveDrawingBuffer: true }}
      className="z-0"
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} autoRotate maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default EarthCanvas