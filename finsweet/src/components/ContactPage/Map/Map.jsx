import React from 'react';
import map from "../../../assets/contactUs/contact_map.png";
import styles from "./Map.module.scss"

const Map = () => {
  return (
    <section className={styles.map}>
      <img src={map} alt="" />
    </section>
  )
}

export default Map