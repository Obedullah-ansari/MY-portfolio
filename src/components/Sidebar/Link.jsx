import React from 'react'
import styles from './Sidebar.module.css';
import {motion} from 'framer-motion';
const variants={
  open:{
    transition:{
      staggerChildren : 0.13,
    },
  },
  closed:{
    transition:{
     staggerChildren : 0.05,
     staggerDirection : -1,
    },
  },
}

const itemvariants={
  open:{
     y: 0,
     opacity: 1
  },
  closed:{
    y:50,
    opacity :0
    
  }
};

function Link({onclick}) {
  const items=["Homepage","Services" ,"Skills" , "About","Contact" ]

  return (
    <motion.div className={styles.links} variants={variants}>
      {items.map( (item)=>(
        <motion.a href={` #${item} `} key={item} 
        className={styles.listitems}
       variants={itemvariants} 
       whileHover={{scale :1.1}} 
       whileTap={{scale :0.95}}
        onClick={onclick}
        >
         {item} </motion.a>
      ))}
    </motion.div>
  )
}

export default Link
