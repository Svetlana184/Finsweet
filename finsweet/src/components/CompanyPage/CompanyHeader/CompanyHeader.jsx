import React from 'react'
import shape from "../../../assets/shapes/process_shape.svg"
import about_1 from "../../../assets/home/about_1.png"
import about_2 from "../../../assets/home/about_2.png"
import about_3 from "../../../assets/home/about_3.png"
import shape_hor from "../../../assets/shapes/about_vert.svg"
import styles from "./CompanyHeader.module.scss"
 
const CompanyHeader = () => {
  return (
    <section className={styles.company_header}>
        <div className={styles.company_header_top}>
            <div  className={styles.company_text}>
                <div  className={styles.square}></div>
                <h6>Company</h6>
                <h3>Award-winning Company seen and used by millions around the world.</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. </p>
            </div>
            <img src={shape} alt="" />
        </div>
        <div  className={styles.company_list}>
            <img className={styles.shape} src={shape_hor} alt="" />
            <div>
                <img src={about_1} alt="" />
                <img src={about_2} alt="" />
                <img src={about_3} alt="" />
            </div>
        </div>
    </section>
  )
}

export default CompanyHeader