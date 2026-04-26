import React from 'react';
import {Link} from 'react-router-dom';
import arrow from "../../../assets/icons/right_arrow_black.svg";
import styles from "./CardLatest.module.scss"

const CardLatest = ({date, title, img, id}) => {
  return (
    <div className={styles.latest_card}>
        <img className={styles.card_pic} src={img} alt="" />
        <div>
            <p>{date}</p>
            <h5>{title}</h5>
            <Link to="/">
                <p>Read More</p>
                <img src={arrow} alt="" />
            </Link>
        </div>
    </div>
  )
}

export default CardLatest