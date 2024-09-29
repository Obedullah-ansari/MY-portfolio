import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import { motion } from "framer-motion";
import { projectdata } from "../Data";
import Project from "./Project.jsx";
import close from "./close.png";
import menu from "./menu.png";
import { Rate } from "antd";

const containerVariants = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

  

function Portfolio() {
  const [selectedproject, setselectedproject] = useState(projectdata[0]);
  const [hidebtn, sethidebtn] = useState(false);

  function handelset(id) {
    const selectedproject = projectdata.find((item) => item.id === id);
    setselectedproject(selectedproject);
    handelshowsidebar();
  }
  function handelshowsidebar() {
    sethidebtn((prev) => !prev);
  }

  function handelcssname() {
    let baseClass = styles.sidebar;
    if (hidebtn === true) {
      return (baseClass += ` ${styles.showsidebarhandel}`);
    }
    return baseClass;
  }

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={handelcssname()}>
          <motion.div
            variants={containerVariants}
            initial="closed"
            animate="open"
            className={styles.projects}
          >
            <div className={styles.btbox}>
              {" "}
              <img src={close} onClick={handelshowsidebar} />{" "}
            </div>
            <ul >
              <motion.h2
                style={{
                  color: "#0c0c1d",
                  margin :"0.3rem",
                }}
              
              >
                Practice Projects
              </motion.h2>
              {projectdata.map((items) => (
                <motion.li
                  variants={itemVariants}
                  className={styles.list}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  key={items.id}
                  onClick={() => handelset(items.id)}
                >
                  {items.title}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <div className={styles.rating}>
            <p>Rate my work</p>

            <Rate
              defaultValue={1}
              tooltips={[
                "☹️Notgood",
                "😐Need improvement",
                "🙂Good",
                "😊Loveit",
                "🤩Excellent",
              ]}
            />
          </div>
        </div>
        <div className={styles.bodypart}>
          <img className={styles.menu} src={menu} onClick={handelshowsidebar} />
          {selectedproject ? (
            <Project
              Id={selectedproject.id}
              vedio={selectedproject.vedio}
              image={selectedproject.image}
              title={selectedproject.title}
              text={selectedproject.text}
              visit={selectedproject.visit}
            />
          ) : (
            <Project
            Id={selectedproject.id}
            vedio={selectedproject.vedio}
            image={selectedproject.image}
            title={selectedproject.title}
            text={selectedproject.text}
            visit={selectedproject.visit}
          />    
          )}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
