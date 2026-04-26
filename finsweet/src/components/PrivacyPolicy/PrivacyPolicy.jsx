import React, { useState } from 'react';
import {privacyData} from "../../mockupData/privacyData";
import shape_title from "../../assets/shapes/privacy_title.svg";
import shape_text from "../../assets/shapes/privacy_text.svg";
import styles from "./PrivacyPolicy.module.scss"

const PrivacyPolicy = () => {
    const [data, setData] = useState(privacyData);
  return (
    <section className={styles.privacy_section}>
        <div className={styles.privacy_title}>
            <div>
                <div  className={styles.privacy_square}></div>
                <h3>Privacy Policy</h3>
                <p>Last Updated  on {privacyData.data}</p>
            </div>
            <img src={shape_title} alt="" />
        </div>
        <div  className={styles.privacy_text}>
            <div>
                <h4>{data.title1}</h4>
                <p>{data.p1}</p>
                <p>{data.p2}</p>
                <p>{data.p3}</p>
                <p>{data.p4}</p>
                <h5>{data.title2}</h5>
                <p>{data.p5}</p>
            </div>
            <img src={shape_text} alt="" />
        </div>
    </section>
  )
}

export default PrivacyPolicy