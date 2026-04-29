import React from 'react';
import styles from "./ServicesParagraph.module.scss"
import Title2 from "../../common/Title2/Title2"
import SimpleText from '../../common/SimpleText/SimpleText';

const ServicesParagraph = ({title, text, tag, img, direction, color}) => {
  return (
    <section style={{backgroundColor: color, display: 'flex', flexDirection: direction, alignItems: 'center', justifyContent: 'space-between', height: '65vh', paddingLeft: '10%', paddingRight: '10%'}}>
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