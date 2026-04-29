import React from 'react'
import shape from "../../../assets/shapes/process_shape.svg"
import about_1 from "../../../assets/home/about_1.png"
import about_2 from "../../../assets/home/about_2.png"
import about_3 from "../../../assets/home/about_3.png"
import shape_hor from "../../../assets/shapes/about_vert.svg"
import styles from "./CompanyHeader.module.scss"
import Title1 from '../../common/Title1/Title1'
import SimpleTag from '../../common/SimpleTag/SimpleTag'
import SimpleTextDark from '../../common/SimpleTextDark/SimpleTextDark'
 
const CompanyHeader = () => {
  return (
    <section className={styles.company_header}>
        <div className={styles.company_header_top}>
            <div className={styles.company_text}>
                <div className={styles.square}></div>
                <SimpleTag tag="Company"/>
                <Title1 name="Award-winning Company seen and used by millions around the world."/>
                <SimpleTextDark text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized."/>
            </div>
            <img className={styles.shape_top} src={shape} alt="" />
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