import React from 'react';
import styles from "./SimpleButton.module.scss";
import arrow from "../../../assets/icons/right_arrow.svg";
import shape from "../../../assets/shapes/btn_shape.svg"

const SimpleButton = ({name}) => {
  return (
    <button className={styles.simple_button}>
        <img className={styles.shape} src={shape} alt="" />
        <p className={styles.text}>{name}</p>
        <img className={styles.arrow} src={arrow} alt="" />
    </button>
  )
}

export default SimpleButton