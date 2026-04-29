import React from 'react'
import styles from "./SimpleText.module.scss"

const SimpleText = ({text, new_styles}) => {
  return (
    <p className={styles.simple_text} style={new_styles}>{text}</p>
  )
}

export default SimpleText