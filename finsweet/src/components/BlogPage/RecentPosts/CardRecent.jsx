import React from 'react'
import styles from "./CardRecent.module.scss"

const CardRecent = ({post}) => {
  return (
    <div className={styles.card_recent}>
        <img className={styles.card_recent_pic} src={post.img} alt="" />
        <div className={styles.card_recent_text}>
            <h5>{post.title}</h5>
            <div className={styles.card_recent_author}>
                <img src={post.pic_author} alt="" />
                <div>
                    <h6>{post.name_author}</h6>
                    <p>{post.date}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardRecent