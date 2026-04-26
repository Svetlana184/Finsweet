import React from 'react'
import {Link} from "react-router-dom"
import arrow from "../../../assets/icons/right_arrow_black.svg"
import styles from "./ServicesCard.module.scss"


const ServicesCard = ({icon, title, text, id}) => {
  return (
    <div className={styles.services_card}>
      <div className={styles.icon}>
        <img src={icon} alt="" />
      </div>
        
        <h4>{title}</h4>
        <p>{text}</p>
        <Link to="/">
            Read more
            <img src={arrow} alt="" />
        </Link>
    </div>
  )
}

export default ServicesCard