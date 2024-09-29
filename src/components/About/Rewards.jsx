import React from "react";
import styles from "./About.module.css";

function Rewards() {
  return (
    <div className={styles.me}>
      <div>
        <span>Hackathons:</span>
        <p>
          During my college fest, I won the hackathons consecutively in my first
          and second year of B.Tech, securing second and third prizes
          respectively.
        </p>
       
      </div>

      <div>
        <span>Coding Competitions:</span>
        <p>
          I have won several coding competitions both in my college and on other
          platforms as well.
        </p>
      </div>
    </div>
  );
}

export default Rewards;
