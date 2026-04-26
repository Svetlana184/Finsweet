import React from 'react'
import logo_1 from "../../../assets/home/logo_1_black.svg";
import logo_2 from "../../../assets/home/logo_2_black.svg";
import logo_3 from "../../../assets/home/logo_3_black.svg";
import logo_4 from "../../../assets/home/logo_4_black.svg";
import logo_5 from "../../../assets/home/logo_5_black.svg";
import styles from "./LogoBar.module.scss"

const LogoBar = () => {
  return (
    <section className={styles.logo_bar}>
        <img src={logo_1} alt="" />
        <img src={logo_2} alt="" />
        <img src={logo_3} alt="" />
        <img src={logo_4} alt="" />
        <img src={logo_5} alt="" />
    </section>
  )
}

export default LogoBar