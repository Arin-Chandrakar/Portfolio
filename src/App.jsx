import './App.css'
import { useState, useRef, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {Background} from "./routes/Home"
import {Blog} from "./routes/Blog"
import {Routes, Route} from "react-router-dom";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Background/>}/>
      <Route path="/Blog" element={<Blog/>}/>
    </Routes>    
  )
}

export default App


