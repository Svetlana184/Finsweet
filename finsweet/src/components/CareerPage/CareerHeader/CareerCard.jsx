import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./CareerCard.module.scss";
import SimpleLink from '../../common/SimpleLink/SimpleLink';

const CareerCard = ({id, title, location, working_hours, salary, exp}) => {
  return (
    <div className={styles.career_card}>
        <div className={styles.career_text}>
            <h3>{title}</h3>
                <p>{location} · {working_hours}</p>
                <p>{salary} · {exp}</p>
        </div>
        <SimpleLink path="/" text="Apply now"/>
    </div>
  )
}

export default CareerCard