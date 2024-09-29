import React from "react";
import { forwardRef } from "react";
import styles from "./Hero.module.css";
import { useState } from "react";
import  crossbtn   from "./x-button.png"
const Contactbox = forwardRef(function ContactModal({}, ref) {
  const [emailvalid, setemailisvalid] = useState(false);

  function handelform(event) {
    const fd = new FormData(event.target);
    const email = fd.get("email");
    if (email.trim() === "" || !emailvalid.includes("@")) {
      event.preventDefault();
      setemailisvalid(true);
    }
  }


  function handelchange() {
    setemailisvalid(false);
  }
  return (
    <>
   
        <dialog ref={ref} className={styles.contactdialog}>
          <div className={styles.formbtn}>
            <form method="dialog">
              <button className={styles.cancel}> <img  onClick={handelchange}  style={{width :"0.8rem"}}   src={crossbtn} alt="" /> </button>
            </form>
          </div>
          <form
            onSubmit={handelform}
            action="https://api.web3forms.com/submit"
            method="POST"
            className={styles.modalform}
          >
            <input
              type="hidden"
              name="access_key"
              value="d65015d1-40f0-453a-b7e5-3ca658ba0eca"
            />
            <input type="text" name="username" placeholder="First Name" />
            <input type="text" name="userlastname" placeholder="Last Name" />
            <input
              type="Email"
              name="email"
              onChange={handelchange}
              placeholder="Email"
            />
            {emailvalid && (
              <p className={styles.error}>Email is required</p>
            )}
            <textarea
              name="Leave a message"
              cols="10"
              rows="8"
              placeholder="Leave a message"
            ></textarea>

            <button type="submit" className={styles.btn3}>
              send
            </button>
          </form>
        </dialog>
      
    </>
  );
});

export default Contactbox;
