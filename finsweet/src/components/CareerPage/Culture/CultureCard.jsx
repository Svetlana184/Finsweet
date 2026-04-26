import React from 'react';
import styles from "./CultureCard.module.scss"

const CultureCard = ({id, icon, title, text}) => {
  return (
    <div className={styles.culture_card}>
        <div><img src={icon} alt="" /></div>
        <h4>{title}</h4>
        <p>{text}</p>
    </div>
  )
}

export default CultureCard