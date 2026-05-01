import React from 'react';
import styles from "./ServicesParagraph.module.scss"
import Title2 from "../../common/Title2/Title2"
import SimpleText from '../../common/SimpleText/SimpleText';

const ServicesParagraph = ({title, text, tag, img, direction, color}) => {
  return (
    <section className={styles.services_par} 
    style={{
      backgroundColor: color, 
      flexDirection: direction
      }}>
        <img className={styles.img_par} src={img} alt="" />
        <div className={styles.text_par} >
            <h6>{tag}</h6>
            <Title2 name={title}/>
            <SimpleText text={text}/>
        </div>
    </section>
  )
}

export default ServicesParagraph