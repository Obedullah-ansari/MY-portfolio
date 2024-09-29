import React from 'react'
import styles from './Navbar.module.css'
import {motion} from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar.jsx';
import linkdin from "./linkedin.png"
import git from "./github.png"
import leetcode from "./leetcode.png"




function Navbar() {
  return (
   <>
     <div className={styles.navbar}>
        <Sidebar/>
        <div className={styles.wrapper}>
            <motion.span 
             className={styles.logo} 
            >My portfolio</motion.span>
            <div className={styles.social}>
                <motion.a  initial={{y:0}} whileHover={{y:-3.5, transition:{duration :0.1}}}  href="#"> <img src={linkdin} alt="" /> </motion.a>
                <motion.a initial={{y:0}} whileHover={{y:-3.5, transition:{duration :0.1}}}  href="#"> <img src={git} alt="" /> </motion.a>
                <motion.a initial={{y:0}} whileHover={{y:-3.5, transition:{duration :0.1}}} href="#"> <img style={{width: 30,}} src={leetcode} alt="" /> </motion.a>
            </div>
        </div>

    </div>
    </>
  )
}

export default Navbar
