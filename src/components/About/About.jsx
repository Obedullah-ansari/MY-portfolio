import React, { useState } from 'react'
import styles from './About.module.css';
import Myimg from './Myimg';
import heroimg from './bggg.png'
import Education from './Education';
import Rewards from './Rewards';
import Me from './Me';
import {motion} from 'framer-motion';



  function About() {
 
  const [about, setabout]= useState("me");
  const [blink, setBlink] = useState(true);
  function handelclick(temp){
    setabout(temp)
    setBlink(false);
    setTimeout(() => {
      setBlink(true);
    }, 350);
  }

  const variants = {
    initial: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5, 
      },
    },
  
  };
  return (
   <>
   <motion.div
    className={styles.conatiner}
    >
      <div className={styles .aboutme}>
        <div> <h3>The Story So Far!</h3></div>
        <div className={styles.btnsection}>
          <button onClick={()=> handelclick("me")} className={about==="me" ? styles.shadow : undefined } >About me</button>
          <button  onClick={()=> handelclick("education") }  className={about==="education"? styles.shadow  : undefined } >Education</button>
          <button onClick={()=> handelclick("rewards") }  className={about==="rewards"? styles.shadow  : undefined }  >Achievements</button>
        </div>
        <motion.div className={styles.info}
          variants={variants}
          animate={blink ? "open" : "initial" }
        >
            { about==="me" && <Me/>}
            { about==="education" && <Education/>}
            { about==="rewards" && <Rewards/>}
        </motion.div>
         <div  className={styles.cvbtnbox}>
         <a className={styles.cv} href="https://drive.google.com/file/d/1uhHNh3U_Zov_w6nxcdc3EMdK8kBt5s8l/view">Download my cv</a>
         </div>
      </div>

      <div className={styles.myheroimg}>
       <div className={styles.makeitrisposive}>
       <Myimg/>
       </div>
       <img className={styles.astro} src={heroimg} alt="" />
      </div>

   </motion.div>
   </>
  )
}

export default About
