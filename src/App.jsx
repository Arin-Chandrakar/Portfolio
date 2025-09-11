import './App.css'
import { useState, useRef, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {Home} from "./routes/Home"
import {Blog} from "./routes/Blog"
import {Routes, Route} from "react-router-dom";
import {FloatingDock} from './components/Dock.jsx'

function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Blog" element={<Blog/>}/>
    </Routes>    
    <FloatingDock  items={[
        { title: "GitHub", href: "https://github.com/", icon: <img src="/github.png" alt="GitHub" className='rounded-full brightness-1500 hover:cursor-pointer'/> },
        { title: "Home", href: "/home", icon: <img src="/home.png" alt="Web" className='rounded-full filter invert hover:cursor-pointer ' /> },
        { title: "Blog", href: "/Blog", icon: <img src="/notebook.png" alt="Web" className='rounded-full filter invert hover:cursor-pointer ' /> },
        { title: "Game", href: "/", icon: <img src="/internet.png" alt="Web" className='rounded-full filter invert hover:cursor-pointer ' /> },
        { title: "Plan", href: "/", icon: <img src="/internet.png" alt="Web" className='rounded-full filter invert hover:cursor-pointer ' /> },
      ]}/>
    </>  
  )
}

export default App


