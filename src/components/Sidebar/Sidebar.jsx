import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import Link from "./Link";
import Togglebutton from "./Togglebutton";
import { motion } from "framer-motion";

function Sidebar() {
  const [isopen, setisopen] = useState(false);

  function handleclick() {
    setisopen((prev) => !prev);

  }


  const variants = {
    initial: {
      clipPath: "circle(25px at 50px 50px)", 
      y:0,
    },
    open: {
      clipPath: "circle(1000px at 40px 40px)",
      transition: {
        type: "spring",
        stiffness: 60,

      },
    },
    closed: {
      clipPath: "circle(25px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40,
       
      },
    },
  };

  return (
    <motion.div className={styles.sidebar} initial="initial" animate={isopen ? "open" : "closed"} >
      <motion.div className={styles.bg} variants={variants}>
        <Link onclick={handleclick} />
      </motion.div>

      <Togglebutton onclick={handleclick}   />
    </motion.div>
  );
}

export default Sidebar;
