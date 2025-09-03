import './App.css'
import { useState, useRef, useEffect } from 'react'
import { GridBackgroundDemo } from './components/BackgroundGrid'
import { GithubContributions } from './components/githubcomp'
import { createRoot } from 'react-dom/client'
import { Football } from './components/FootballModel'


function App() {
  return(
    <Background/>
    
  )
}

function Background(){
  return(
    <div>
      {/* <GridBackgroundDemo/> */}
      <NameIntro/>
      <AboutMe/>
      <Experience/>
      <GithubContributions/>
      <Football/>
    </div>
  )
}

function NameIntro(){
  return(
    <div className='bg-pink-900 h-46 w-[900px] font-sans font-bold mx-auto mt-20 flex flex-row justify-between'>
      <div className='pl-5 mt-7 h-1.5'>
        <h1 className='text-5xl text-white'>Hi,How are you</h1>
        <h2 className='text-white pt-1.5'>Learner, Dev and Culer.</h2>
      </div>
      <FaceCircle/>
    </div>
  )
}


function AboutMe(){
  
  return(
    <div className='bg-amber-800 h-48 w-[900px]  mx-auto group pl-5'>
      <h1 className='font-sans font-bold text-3xl text-white'>About</h1>
      <div className='prose font-sans font-medium text-base text-white opacity-80 text-pretty'>
        <p className='pt-2'>Things that I love: technology, books, football and barcelona.</p>
        <p className='pt-2'>Currently experimenting with web2 and web3</p>
        <p className='pt-2'>I love to learning. Currently trying to unclog my brain from all the brainrot.</p>
      </div>
    </div>
  )
}

function Projects(){

}

function Experience(){
  return <div className='bg-white w-[900px] mx-auto cursor-pointer' >
    Hi
  </div>
}

function FaceCircle(){
  const faceRef=useRef(null);
  useEffect(()=>{
    const element=faceRef.current;
    if(!element) return;

    const handleEnter=(event)=>{
      const xCoordinate=event.offsetX;
      const yCoordinate=event.offsetY;
      console.log(`Mouse moved at X-coordinate: ${xCoordinate} , Y-coordinate: ${yCoordinate} relative to the element.`);
    }


    element.addEventListener("mousemove",handleEnter);
    return ()=>{
      element.removeEventListener("mousemove",handleEnter);
    }
  },[])

    return(
        <div id='facecircle' ref={faceRef}>
          <img src="Kobe.jpg" alt="" className='w-32 h-32 rounded-full mt-7 mb-7 mr-7 flex items-center justify-center font-bold animate-none hover:animate-spin hover:[animation-duration:5s]' />
        </div>
    )
}

export default App

function faceCircleCoordinates(){
  
}
