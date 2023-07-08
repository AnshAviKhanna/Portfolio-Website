import { Routes, Route, Router } from "react-router-dom"
import {useEffect,useState} from 'react'
import Headroom from "react-headroom";
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import diamond from './assets/diamond.png'
import './App.css';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <>
    {loading === false ? (
    <div className='App'>
        <Headroom>
          <Navbar/>
        </Headroom>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
   </div>
  ):(<div className="bg-black flex justify-center items-center w-screen h-screen">
    <img src={diamond} alt="" style={{ width: '25vw', height: 'auto' }} className="motion-safe:animate-bounce w-fit object-scale-down" />
  </div>)}
  </>
  );
}

export default App;
