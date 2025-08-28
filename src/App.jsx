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
      <GridBackgroundDemo/>
      <AboutMe/>
    </div>
  )
}

function AboutMe(){
  return(
    <div className='relative bg-pink-400 h-64 w-[900px] mx-auto mt-20'>
      <h1 className='text-5xl pl-5 pt-4 h-1.5 '>Hi,</h1>
    </div>
  )
}

export default App
