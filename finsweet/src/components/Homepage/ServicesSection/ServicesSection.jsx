import React from 'react'
import SimpleButton from "../../common/SimpleButton/SimpleButton"
import styles from "./ServicesSection.module.scss"
import {steps} from "../../../mockupData/stepsData"
import ServicesCard from "./ServicesCard"

const ServicesSection = () => {
  return (
    <section className={styles.services_section}>
        <div className={styles.services_text}>
            <h6>Our Services</h6>
            <h3>We build software solutions that solve client's business challenges</h3>
            <SimpleButton name="Start a Project"/>
        </div>
        <div className={styles.services_list}>
            {steps.slice(0,3).map(item => <ServicesCard key={item.id} icon={item.icon} title={item.title} text={item.text}/>)}
        </div>
    </section>
  )
}

export default ServicesSection