import React from 'react';
import styles from "./ServicesParagraph.module.scss"

const ServicesParagraph = ({title, text, tag, img, direction, color}) => {
  return (
    <section style={{backgroundColor: color, display: 'flex', flexDirection: direction, alignItems: 'center', justifyContent: 'space-between', height: '65vh', paddingLeft: '10%', paddingRight: '10%'}}>
        <img className={styles.img_par} src={img} alt="" />
        <div className={styles.text_par} >
            <h6>{tag}</h6>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </section>
  )
}

export default ServicesParagraph