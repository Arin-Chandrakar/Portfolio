import { Canvas } from '@react-three/fiber'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export function Football(){
  const gltf=useLoader(GLTFLoader,"/scene.gltf")
  return(
    <div className='bg-pink-400 w-60 h-40 mx-auto'>
      <Canvas className='w-40 h-40'>
        <ambientLight />
        <directionalLight position={[2, 2, 2]} />
        <primitive object={gltf.scene} scale={[0.3,0.3,0.3]}/>
      </Canvas>
    </div>
  ) 
}

