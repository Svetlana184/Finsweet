import React, { useState } from 'react';
import {culture_cards} from "../../../mockupData/careerData"
import CultureCard from './CultureCard';
import styles from "./Culture.module.scss"

const Culture = () => {
const [data, setData] = useState(culture_cards);

  return (
    <section className={styles.culture}>
        <div className={styles.text}>
            <h6>OUR WORK & CULTURE</h6>
            <h3>Come and join a team of highly skilled professionals.</h3>
            <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
        </div>
        <div className={styles.list}>
            {data.map(item => <CultureCard id={item.id} icon={item.icon} title={item.title} text={item.text}/>)}
        </div>
    </section>
  )
}

export default Culture