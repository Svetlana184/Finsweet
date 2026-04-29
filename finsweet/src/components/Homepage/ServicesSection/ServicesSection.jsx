import React from 'react'
import SimpleButton from "../../common/SimpleButton/SimpleButton"
import styles from "./ServicesSection.module.scss"
import {steps} from "../../../mockupData/stepsData"
import ServicesCard from "./ServicesCard"
import Title1 from "../../common/Title1/Title1"
import SimpleTag from '../../common/SimpleTag/SimpleTag'

const ServicesSection = () => {
  return (
    <section className={styles.services_section}>
        <div className={styles.services_text}>
            <SimpleTag tag="Our Services"/>
            <Title1 new_styles={{width: '80%'}} name="We build software solutions that solve client's business challenges"/>
            <SimpleButton name="Start a Project"/>
        </div>
        <div className={styles.services_list}>
            {steps.slice(0,3).map(item => <ServicesCard key={item.id} icon={item.icon} title={item.title} text={item.text}/>)}
        </div>
    </section>
  )
}

export default ServicesSection