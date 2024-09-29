import React, { useState } from "react";
import styles from "./Skills.module.css";
import Generalskill from "./Generalskill";
import Softskill from "./Softskill";
import Mern from "./Mern";
import Datascience from "./Datascience";
import { motion} from "framer-motion"
import { useMediaQuery } from "@react-hook/media-query";

function Skills() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [showskills, setshowskills]= useState("");
    function handelskills(target){
     setshowskills(target)
    }
  return (
    <>
      <motion.div
       className={styles.container} >
         <div className={styles.headingtext}>
         <h1>Why choose me </h1>
        <motion.span initial={{width :0, }} whileInView={{width: isSmallScreen?250 :600 , transition :{duration : 1}}}  className={styles.progressbar}  ></motion.span>
         </div>
        <div className={styles.wrapper}>

          <div className={styles.buttonsection}>
               <h2>Click to see my progress</h2>
              <div className= {styles.skillsbuttons}>
                 <button onClick={ ()=> handelskills("Tech") } >Technical skills</button>
                 <button onClick={ ()=> handelskills("softskills") }>Soft skills</button>
              </div>
              <div className= {styles.skillsbuttons}>
                 <button onClick={ ()=> handelskills("mern") }>My skills as a devloper</button>
                 <button  onClick={ ()=> handelskills("datatech") }  >My skills as a Data scientist</button>
              </div>
          </div>


          <div className={styles.chartsection}>
              {showskills==="" &&    <div className={styles.initialtext}> 
           <img src="https://i.gifer.com/origin/71/711557abfeed55bc0ebc5185168147c6.gif" alt="" />
          </div>  }
             {showskills ==="Tech" && <Generalskill/>} 
             {showskills ==="softskills" && <Softskill/>} 
             {showskills ==="mern" && <Mern/>} 
             {showskills ==="datatech" && <Datascience/>} 
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Skills;
