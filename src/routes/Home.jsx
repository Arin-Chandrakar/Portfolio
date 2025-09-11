import { useState, useRef, useEffect } from 'react'
import { GithubContributions } from "../components/githubcomp.jsx"
import { createRoot } from 'react-dom/client'
import { Football } from '../components/FootballModel.jsx'
import { ChessBoard } from '../components/ChessBoard'
import {FloatingDock} from '../components/Dock.jsx'

export function Home(){
  return(
    <div>
      {/* <GridBackgroundDemo/> */}
      <NameIntro/>
      <AboutMe/>
      <Projects/>
      <GithubContributions/>
      {/* <ChessBoard/> */}
    </div>
  )
}

function NameIntro(){
  return(
    <div className='h-46 w-[900px] font-sans font-bold mx-auto mt-20 flex flex-row justify-between'>
      <div className='pl-5 mt-7 h-1.5'>
        <h1 className='text-5xl text-white'>Hi,I'm Arin</h1>
        <h2 className='text-white pt-1.5'>Learner, Dev and Culer.</h2>
      </div>
      {/* <FaceCircle/> */}
      <Football/>
    </div>
  )
}


function AboutMe(){
  
  return(
    <div className='h-48 w-[900px]  mx-auto group pl-5'>
      <h1 className='font-sans font-bold text-3xl text-white'>About</h1>
      <div className='prose font-sans font-medium text-base text-white opacity-80 text-pretty'>
        <p className='pt-2'>Things that I love: technology, books, football and barcelona.</p>
        <p className='pt-2'>Currently experimenting with web2 and web3</p>
        <p className='pt-2'>I love to learning. Currently trying to unclog my brain from all the brainrot.</p>
        <p className='pt-2'>Major chess enthusiast</p>
      </div>
    </div>
  )
}


function Projects(){
  return <div className='w-[900px] h-40 mx-auto pl-5' >
    <div className='font-sans font-bold text-3xl text-white'>
      <h2>Projects</h2>
      <div className='pt-2 flex justify-between'>
        <div className='font-medium text-2xl'>
          <h2>WanderLust</h2>
          <div className='font-medium text-sm opacity-80 text-pretty'>
            <p>Airbnb reimagined into the indian culture</p>
          </div>
        </div>
        <div className='flex'>
          <a href="https://www.google.com/" target='_blank'>
            <img src="/internet.png" alt="" className='mx-2 w-8 h-8 rounded-full filter invert hover:cursor-pointer'/>
          </a>
          <a href="https://github.com/Arin-Chandrakar/wanderlust-main" target='_blank'>
            <img src="/github.png" alt="" className='mx-2 w-8 h-8 rounded-full brightness-1500 hover:cursor-pointer'/>
          </a>
        </div>
      </div>

      <div className='pt-2 flex justify-between'>
        <div className='font-medium text-2xl'>
          <h2>Flappy Bird</h2>
          <div className='font-medium text-sm opacity-80 text-pretty'>
            <p>Do i really need to describe this? Just play and enjoy the nostalgia</p>
          </div>
        </div>
        <div className='flex'>
          <a href="https://flappy-bird-six-steel.vercel.app/" target='_blank'>
            <img src="/internet.png" alt="" className='mx-2 w-8 h-8 rounded-full filter invert hover:cursor-pointer'/>
          </a>
          <a href="https://github.com/Arin-Chandrakar/Flappy-Bird" target='_blank'>
            <img src="/github.png" alt="" className='mx-2 w-8 h-8 rounded-full brightness-1500 hover:cursor-pointer'/>
          </a>
        </div>
      </div>

    </div>
  </div>
}

function FaceCircle(){
  const faceRef=useRef(null);
  const [side,setSide]=useState(null)


  useEffect(()=>{
    const element=faceRef.current;
    if(!element) return;

    const handleEnter=(event)=>{
      const xCoordinate=event.offsetX;
      const yCoordinate=event.offsetY;

      if(event.offsetX<element.offsetWidth/2){
      setSide("left");
      }else if(event.offsetX>element.offsetWidth/2){
      setSide("right");
      }else{
        setSide(null)
      }

      console.log(side)
      console.log(`Mouse moved at X-coordinate: ${xCoordinate} , Y-coordinate: ${yCoordinate} relative to the element.`);
    }

    const handleLeave=()=>{
      setSide(null);
    };

    element.addEventListener("mousemove",handleEnter);
    element.addEventListener("mouseleave",handleLeave)
    return ()=>{
      element.removeEventListener("mousemove",handleEnter);
      element.removeEventListener("mouseleave",handleLeave);
    }
  },[side])

  // useEffect(()=>{
  //   console.log("Side Changed :", side)
  // },[side]);

    return(
        <div id='facecircle' >
          <img src="Kobe.jpg" alt="" ref={faceRef} className="w-32 h-32 rounded-full mt-7 mb-7 mr-7 flex items-center justify-center font-bold animate-none" 
           style={{transform: side === "left" ? "rotateY(-50deg)" : side === "right" ? "rotateY(50deg)" : "rotateY(0deg)", transition: "transform 0.3s ease"}}/>
            {/*hover:animate-spin hover:[animation-duration:5s  */}
        </div>
    )
}


