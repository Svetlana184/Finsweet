import React from 'react'
import SimpleButton from "../../common/SimpleButton/SimpleButton";
import pic from "../../../assets/home/transform_pic.png";
import logo_1 from "../../../assets/home/logo_1.svg";
import logo_2 from "../../../assets/home/logo_2.svg";
import logo_3 from "../../../assets/home/logo_3.svg";
import logo_4 from "../../../assets/home/logo_4.svg";
import logo_5 from "../../../assets/home/logo_5.svg";
import styles from "./Transform.module.scss"

const Transform = () => {
  return (
    <section className={styles.transform}>
        <div className={styles.transform_top}>
            <div className={styles.transform_text}>
                <div></div>
                <h3>Transform Your Idea Into Reality with Finsweet</h3>
                <p className={styles.transform_text_p} >The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
                <SimpleButton name="Request Quote"/>
            </div>
            <img className={styles.transform_img} src={pic} alt="" />
        </div>
        <ul>
            <li>
                <h6>Our Clients</h6>
                <h5>We've Worked with</h5>
            </li>
            <li>
                <img src={logo_1} alt="" />
            </li>
            <li>
                <img src={logo_2} alt="" />
            </li>
            <li>
                <img src={logo_3} alt="" />
            </li>
            <li>
                <img src={logo_4} alt="" />
            </li>
            <li>
                <img src={logo_5} alt="" />
            </li>
        </ul>
    </section>
  )
}

export default Transform