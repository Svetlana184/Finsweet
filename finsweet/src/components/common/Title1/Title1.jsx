import React from 'react'
import styles from "./Title1.module.scss"

const Title1 = ({name, new_styles}) => {
  return (
    <h3 className={styles.title} style={new_styles}>{name}</h3>
  )
}

export default Title1