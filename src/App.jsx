import './App.css'
import { useState, useRef, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {Home} from "./routes/Home"
// import {Blog} from "./routes/Blog"
import {BrowserRouter,Routes, Route} from "react-router-dom";
import {FloatingDock} from './components/Dock.jsx';
import { FullBlog } from './routes/BlogInfo.jsx'
import { BlogTable } from './routes/Blog'
import { ChessPage } from './routes/Chess.jsx';

function App() {
  return(
    <>
      <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Blog" element={<BlogTable/>}/>
            <Route path="/Blog/:slug" element={<FullBlog/>}/>
            <Route path="/chess" element={<ChessPage/>}/>
          </Routes>  
      </BrowserRouter>  
    <FloatingDock  items={[
        { title: "Home", href: "/home", icon: <img src="/home.png" alt="Web" className='rounded-sm filter invert hover:cursor-pointer ' /> },
        { title: "GitHub", href: "https://github.com/", icon: <img src="/github.png" alt="GitHub" className='rounded-sm brightness-1500 hover:cursor-pointer'/> },
        { title: "Blog", href: "/Blog", icon: <img src="/notebook.png" alt="Web" className='rounded-sm filter invert hover:cursor-pointer' /> },
        { title: "Twitter", href: "https://x.com/arinntwt", icon: <img src="/twitter.png" alt="Web" className='rounded-sm filter invert hover:cursor-pointer' /> },
        // { title: "Chess", href: "/chess", icon: <img src="/queen.png" alt="Web" className='rounded-sm filter invert hover:cursor-pointer ' /> },
      ]}/>
    </>  
  )
}

export default App


