import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact.jsx";
import React from 'react'
import Parallex from "./components/Parallex/Parallex.jsx";
import Services from "./components/Services/Services.jsx";
import {easeInOut, motion} from "framer-motion"

function Allmain() {
  return (
   <>
     <motion.section id="Homepage"
     initial={{rotatex:0 , rotatey:0}}
     animate={{rotateX:[0,20,0], rotateY:[0,30,0], transition:{duration:2.5, ease: easeInOut}}}
     >
     <Navbar/>
     <Hero/>
     </motion.section>
     
    <section id="About" >
    <About/>
    </section>
    <section id="Skills" >

      <Skills />
    </section>
    
    <Services />
  
    <section>
      <Parallex/>
    </section>
    <section id="Contact">
      <Contact/>
    </section>
   </>
  )
}

export default Allmain
