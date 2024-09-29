import React from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import location from "./Images/location.png";
import instagram from "./Images/instagram.png";
import gamil from "./Images/gmail.png";
import telephone from "./Images/telephone.png";
import { useMediaQuery } from "@react-hook/media-query";
import Listitem from "./Listitem";


const itemsdata= [
  { 
    id:1,
    img : location,
    des : "Hazaribag Jharkand 823501"
  },
  { 
    id:2,
    img : instagram,
    des : "Ubaidammar4"
  },
  { 
    id:3,
    img : gamil,
    des : "ubaidammar346@gmail.com"
  },
  { 
    id:4,
    img : telephone,
    des : "+919608833523"
  },
]

function Contact() {

  const [emailvalid, setemailisvalid] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  function handelform(event) {
    const fd = new FormData(event.target);
    const emailvalid = fd.get("email");
    if (emailvalid.trim() === "" && !emailvalid.includes("@")) {
      event.preventDefault();
      setemailisvalid(true);
    }
  }

  function handelchange() {
    setemailisvalid(false);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.robo}>
          <h1 className={styles.heading}>contact me</h1>
          <motion.span className={styles.uderline}
          initial={{width :0 }}
          whileInView={{ width: isSmallScreen ? 300 : 600 , transition :{duration: 1}} }
          ></motion.span>
          <div className={styles.minirobot} >
            
            {itemsdata.map((items)=>(
              <Listitem key={items.id} img ={items.img} des={items.des}   />
            ))}
          </div>
        </div>

        <div className={styles.Contact}>
          <form
            onSubmit={handelform}
            action="https://api.web3forms.com/submit"
            method="POST"
            className={styles.contactbio}
          >
            <h2> Send a message to me </h2>
            <input
              type="hidden"
              name="access_key"
              value="d65015d1-40f0-453a-b7e5-3ca658ba0eca"
            />

            <input type="text" name="username" placeholder="Firstname" />

            <input type="text" name="userlastname" placeholder="Last name" />

            <input
              type="Email"
              name="email"
              placeholder="Email"
              onChange={handelchange}
            />
            {emailvalid && <p className={styles.error}>Email is required</p>}

            <textarea
              name="Leave a message"
              cols="10"
              rows="8"
              placeholder="Leave a message"
            ></textarea>
            <button className={styles.submtbtn}>send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
