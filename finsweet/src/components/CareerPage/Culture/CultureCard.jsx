import React from 'react';
import styles from "./CultureCard.module.scss"
import SimpleText from '../../common/SimpleText/SimpleText';

const CultureCard = ({id, icon, title, text}) => {
  return (
    <div className={styles.culture_card}>
        <div><img src={icon} alt="" /></div>
        <h4>{title}</h4>
        <SimpleText text={text}/>
    </div>
  )
}

export default CultureCard