import React, { useState } from 'react';
import {Link} from "react-router-dom";
import shape from "../../../assets/shapes/process_shape.svg";
import career_img from "../../../assets/career/career_img.png";
import {positions} from "../../../mockupData/careerData"
import CareerCard from './CareerCard';
import styles from "./CareerHeader.module.scss"

const CareerHeader = () => {
    const [data, setData] = useState(positions);

  return (
    <section className={styles.career_header}>
        <div className={styles.career_text}>
            
            <div>
                <h6>CAREER AT FINSWEET</h6>
                <h2>We hired people who are Always Passionate about what they do</h2>
                <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw .</p>
                <img src={career_img} alt="" />
                <div>
                    <p>See Our open positions </p>
                    <p>👇</p>
                </div>
                
            </div>
            <img className={styles.career_shape} src={shape} alt="" />
        </div>
        <div className={styles.career_list}>
            {data.map(item => <CareerCard id={item.id} title={item.title} location={item.location} working_hours={item.working_hours} salary={item.salary} exp={item.exp}/>)}
        </div>
    </section>
  )
}

export default CareerHeader