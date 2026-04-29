import React from 'react';
import styles from "./AllCard.module.scss"

const AllCard = ({post}) => {
  return (
    <div className={styles.all_card}>
        <img className={styles.all_card_pic} src={post.img} alt="" />
        <div className={styles.all_card_text}>
            <h4>{post.title}</h4>
            <p>{post.short_desc}</p>
            <div className={styles.all_card_author}>
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

export default AllCard