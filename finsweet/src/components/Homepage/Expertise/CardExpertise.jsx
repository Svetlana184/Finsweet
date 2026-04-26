import React from 'react'
import styles from "./CardExpertise.module.scss"

const CardExpertise = ({icon, title, text}) => {
  return (
    <div className={styles.card_exp}>
        <div className={styles.icon}>
            <img src={icon} alt="" />
        </div>
        <div>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default CardExpertise;