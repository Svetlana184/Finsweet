import React from 'react';
import styles from "./Subscribe.module.scss";
import sub_1 from "../../../assets/shapes/sub_1.svg";
import sub_2 from "../../../assets/shapes/sub_2.svg"

const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
        <img className={styles.sub_1} src={sub_1} alt="" />
        <div className={styles.par}>
            <h5>NEWSLETTER</h5>
            <h3>Subscribe our News Letter to get Latest Updates.</h3>
        </div>
        <form>
            <input type='text' placeholder='Paresh@Pixeto.com'/>
        </form>
        <img className={styles.sub_2} src={sub_2} alt="" />
    </section>
  )
}

export default Subscribe