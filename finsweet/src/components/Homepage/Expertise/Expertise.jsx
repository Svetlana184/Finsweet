import React from 'react'
import styles from "./Expertise.module.scss"
import shape from "../../../assets/shapes/expertise.svg"
import {steps} from "../../../mockupData/stepsData"
import CardExpertise from './CardExpertise'

const Expertise = () => {

  return (
    <section className={styles.expertise}>
        <div className={styles.expertise_text}>
            <h6>Our expertise</h6>
            <h3>We want to get local identification in every corner of the world in this era of global citizenship</h3>
            <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
        </div>
        <div className={styles.expertise_lists}>
            <div className={styles.expertise_square}>
            </div>
            <ul>
                {steps.slice(0,3).map(item => <CardExpertise key={item.id} icon={item.icon} title={item.title} text={item.text}/>)}
            </ul>
            <img className={styles.expertise_shape} src={shape} alt="" />
        </div>
    </section>
  )
}

export default Expertise