import React from 'react'
import {Link} from "react-router-dom"
import styles from "./ServicesCard.module.scss"
import SimpleText from '../../common/SimpleText/SimpleText'
import SimpleLink from '../../common/SimpleLink/SimpleLink'


const ServicesCard = ({icon, title, text, id}) => {
  return (
    <div className={styles.services_card}>
      <div className={styles.icon}>
        <img src={icon} alt="" />
      </div>
        
        <h4>{title}</h4>
        <SimpleText text={text}/>
        <SimpleLink path="/services" text="Read more"/>
    </div>
  )
}

export default ServicesCard