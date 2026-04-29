import React from 'react'
import styles from "./SimpleTextDark.module.scss"

const SimpleTextDark = ({text, new_styles}) => {
  return (
    <p className={styles.simple_text} style={new_styles}>{text}</p>
  )
}

export default SimpleTextDark