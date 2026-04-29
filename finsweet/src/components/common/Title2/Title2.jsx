import React from 'react';
import styles from "./Title2.module.scss"

const Title2 = ({name, new_styles}) => {
  return (
    <h3 className={styles.title} style={new_styles}>{name}</h3>
  )
}

export default Title2;