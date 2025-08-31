import './App.css'
import { GridBackgroundDemo } from './components/BackgroundGrid'

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
      
    </div>
  )
}

function NameIntro(){
  return(
    <div className='bg-pink-400 h-64 w-[900px] mx-auto mt-20 flex flex-row justify-between'>
      <h1 className='text-5xl pl-5 mt-7 h-1.5'>Hi,How are you</h1>
      <FaceCircle/>
    </div>
  )
}

function AboutMe(){
  return(
    <div className='bg-amber-600 h-48 w-[900px] mx-auto'>
      Hey
    </div>
  )
}

function FaceCircle(){
    return(
        <div className='bg-blue-600 w-44 h-44 rounded-full mt-7 mr-7 flex items-center justify-center font-bold'>
          Hi
        </div>
    )
}

export default App
