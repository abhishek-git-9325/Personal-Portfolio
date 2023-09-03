import React,{ Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import Loader from '../Loader';

const Ball = ({imgUrl}) => {
  const [decal] = useTexture([imgUrl]);
  
  return (
      <mesh castShadow receiveShadow scale={2.75}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 0.05]} />
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color='#fff' polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} flatShading map={decal} />
      </mesh>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas