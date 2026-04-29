import React, { useState } from 'react';
import {culture_cards} from "../../../mockupData/careerData"
import CultureCard from './CultureCard';
import styles from "./Culture.module.scss"
import SimpleTag from '../../common/SimpleTag/SimpleTag';
import Title2 from '../../common/Title2/Title2';
import SimpleText from '../../common/SimpleText/SimpleText';

const Culture = () => {
const [data, setData] = useState(culture_cards);

  return (
    <section className={styles.culture}>
        <div className={styles.text}>
            <SimpleTag tag="OUR WORK & CULTURE"/>
            <Title2 name="Come and join a team of highly skilled professionals."/>
            <SimpleText text="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded."/>
        </div>
        <div className={styles.list}>
            {data.map(item => <CultureCard id={item.id} icon={item.icon} title={item.title} text={item.text}/>)}
        </div>
    </section>
  )
}

export default Culture