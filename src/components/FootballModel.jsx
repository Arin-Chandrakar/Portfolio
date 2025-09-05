import { Canvas } from '@react-three/fiber'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { useRef, useState } from "react";

// export function Football(){
//   const gltf=useLoader(GLTFLoader,"/scene.gltf")
//   return(
//     <div className='bg-pink-400 w-60 h-40 mx-auto'>
//       <Canvas className='w-40 h-40'>
//         <ambientLight />
//         <directionalLight position={[2, 2, 2]} />
//         <primitive object={gltf.scene} scale={[0.3,0.3,0.3]}/>
//       </Canvas>
//     </div>
//   ) 
// }

function FootballModel({mouse}){
  const gltf=useLoader(GLTFLoader,"/scene.gltf")
  const modelRef=useRef();

  useFrame(()=>{
    if(modelRef.current){
      modelRef.current.rotation.y=mouse.x*0.5;
      modelRef.current.rotation.x=mouse.y*0.005;
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} position={[0,-8,3.75]} scale={[5, 5, 5]} />;
}

export function Football(){
  
  const [mouse,setMouse]=useState({x:0,y:0});

  const handleMouseMove=(event)=>{
    const {offsetX,offsetY,target}=event.nativeEvent;
    const width=target.clientWidth;
    const height=target.clientHeight;

    const x=(offsetX/width)*2-1;
    const y=(offsetY/height)*2-1;

    setMouse({x,y});
  }


  return(
    <div className='bg-white w-32 h-32 mx-auto rounded-full mt-7 mb-7 mr-7' >
      <Canvas className='w-32 h-32 rounded-full' onPointerMove={handleMouseMove}>
        <ambientLight />
        <directionalLight position={[0, 2,5]} intensity={5}/>
        {/* <primitive ref={modelRef} object={gltf.scene} scale={[0.3,0.3,0.3]}/> */}
        <FootballModel mouse={mouse}/>
      </Canvas>
    </div>
  ) 
}

