import React, { useRef } from 'react'
import styles from "./Services.module.css"
import {motion, useScroll , useSpring, useTransform} from "framer-motion";


const items = [
    {
        id :1,
        title : "Web Devloper ",
        image : "https://i.pinimg.com/originals/02/74/20/0274207612d515f49012c87803a9e631.gif",
        desc :"Offering professional web development services tailored to your needs. From sleek designs to robust functionalities, I craft engaging websites that elevate your online presence and drive results"
    },
    {
        id :2,
        title : "Data Scientist ",
        image : "https://i.pinimg.com/originals/77/29/f4/7729f4ebf5dd3d6754dee0ed5837ef77.gif",
        desc : "Unlocking business potential with data-driven insights. From predictive analytics to machine learning, I optimize processes and drive informed decisions, propelling your success."
    },
    
] 


const Single = ({item}) =>{

       const ref= useRef()
    const {scrollYProgress} = useScroll({
        target :ref,
    })
  

  const  y = useTransform(scrollYProgress ,[0,1], [-300,300]);
 
    return (
        <section id="Services" > 
          <div className={styles.container}>
        
            <div className={styles.wrapper}>
            <div ref={ref} className={styles.imgconatiner}><img src={item.image} className={styles.img} alt="" /></div>
            <motion.div className={styles.textcontainer}  style={{y}}>
               <h2 > {item.title }</h2>
                <p>{item.desc} </p>
            </motion.div>
            </div>
            
          </div>
        </section>
    )
}
function Services() {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target :ref , offset :["end end " , "start start"]})

    const scaleX = useSpring(scrollYProgress  ,{
        stiffness :100,
        damping : 30,
    })

  return (
   <> 
    <div className={styles.portfolio} ref={ref}>
        <div className={styles.progress}>
            <h1>My Services</h1>
            <motion.div style={{scaleX : scaleX}} className={styles.progressbar}></motion.div>
        </div>
        {items.map((item)=>(
         <Single item={item} key={item.id} />
        )  )}
    </div>
   
   </>
  )
}

export default Services
