import React from 'react'
import {Link} from "react-router-dom"
import arrow from "../../../assets/icons/right_arrow_black.svg"
import styles from "./SimpleLink.module.scss"

const SimpleLink = ({path, text}) => {
  return (
        <Link className={styles.read_more} to={path}>
            <p>{text}</p>
            <img src={arrow} alt="" />
        </Link>
  )
}

export default SimpleLink