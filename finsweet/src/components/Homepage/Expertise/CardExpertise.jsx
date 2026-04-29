import React from 'react'
import styles from "./CardExpertise.module.scss"
import SimpleText from '../../common/SimpleText/SimpleText';

const CardExpertise = ({icon, title, text}) => {
  return (
    <div className={styles.card_exp}>
        <div className={styles.icon}>
            <img src={icon} alt="" />
        </div>
        <div>
            <h4>{title}</h4>
            <SimpleText text={text}/>
        </div>
    </div>
  )
}

export default CardExpertise;