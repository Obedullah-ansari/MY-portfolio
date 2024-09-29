import React from "react";
import styles from "./Sidebar.module.css";
import { motion } from "framer-motion";

const ToggleButton = ({ onclick}) => {
  return (
    <button className={styles.btn} onClick={onclick}>
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="none" />
        <motion.path
         d="M 2 9.423 L 20 9.423"
         stroke="#000000"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
         
          variants={{
            open: { d: "M 3 16.5 L 17 2.5" },
            closed: { d: "M 2 2.5 L 20 2.5"  },
           
          }}

        />
        <motion.path
          d="M 2 9.423 L 20 9.423"
          stroke="#000000"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 }
          }}
       
        />
        <motion.path
         d="M 2 9.423 L 20 9.423"
          stroke="#000000"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            open: {d: "M 3 2.5 L 17 16.346" },
            closed: { d: " M 2 16.346 L 19 16.346"
          }
          }}
        
        />
      </svg>
    </button>
  );
};

export default ToggleButton;

