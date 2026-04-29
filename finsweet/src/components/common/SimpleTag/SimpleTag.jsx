import React from 'react'
import styles from "./SimpleTag.module.scss"

const SimpleTag = ({tag, new_styles}) => {
  return (
    <h6 className={styles.tag} style={new_styles}>{tag}</h6>
  )
}

export default SimpleTag