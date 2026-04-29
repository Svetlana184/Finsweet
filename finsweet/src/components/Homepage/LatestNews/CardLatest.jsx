import React from 'react';
import {Link} from 'react-router-dom';
import styles from "./CardLatest.module.scss"
import SimpleLink from '../../common/SimpleLink/SimpleLink';

const CardLatest = ({date, title, img, id}) => {
  const url = "blog/" + id;
  return (
    
    <div className={styles.latest_card}>
        <img className={styles.card_pic} src={img} alt="" />
        <div>
            <p className={styles.card_pic_p}>{date}</p>
            <h5>{title}</h5>
            <SimpleLink path={url} text="Read more"/>
        </div>
    </div>
  )
}

export default CardLatest