import React from 'react';
import { Link } from 'react-router-dom';
import arrow from "../../../assets/icons/right_arrow_black.svg";
import styles from "./CareerCard.module.scss";

const CareerCard = ({id, title, location, working_hours, salary, exp}) => {
  return (
    <div className={styles.career_card}>
        <div className={styles.career_text}>
            <h3>{title}</h3>
                <p>{location} · {working_hours}</p>
                <p>{salary} · {exp}</p>
        </div>
        <Link to="/">
            Apply now
            <img src={arrow} alt="" />
        </Link>
    </div>
  )
}

export default CareerCard