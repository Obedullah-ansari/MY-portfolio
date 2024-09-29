import React, { useRef } from "react";
import styles from "./Hero.module.css";
import heroimg from "./bggg.png";
import scroll from "./scroll.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollbutton: {
    opacity: 0,
    y: 10,

    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

function Hero() {
  const modal = useRef();

  function handelshowmodal() {
    modal.current.showModal();
  }

  return (
    <>
      <ContactModal ref={modal} />
      <div className={styles.hero}>
        <div className={styles.warraper}>
          <motion.div
            className={styles.textconatiner}
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={textVariants}>Obedullah Ansari</motion.h2>
            <motion.div variants={textVariants} className={styles.risponsive}>
              <motion.h1 variants={textVariants}>
                web devloper and ui/ux desiggner
              </motion.h1>
              <motion.div className={styles.btn} variants={textVariants}>
                <motion.button variants={textVariants} className={styles.btn1}>
                  <Link className={styles.newpage} to="/MY-portfolio/portfolio">
                    portfolio
                  </Link>
                </motion.button>
                <motion.button
                  variants={textVariants}
                  className={styles.btn2}
                  onClick={handelshowmodal}
                >
                  contact
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.img
              animate="scrollbutton"
              variants={textVariants}
              src={scroll}
              alt=""
            />
          </motion.div>

          <div className={styles.imgcontainer}>
            <motion.div className={styles.glowbox}>
              <motion.img src={heroimg} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
