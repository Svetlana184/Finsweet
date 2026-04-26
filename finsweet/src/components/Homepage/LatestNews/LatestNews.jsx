import React, { useState } from 'react'
import {news} from "../../../mockupData/newsData"
import CardLatest from './CardLatest';
import styles from "./LatestNews.module.scss"

const LatestNews = ({news_data = news, title = "Read our latest blogs & news"}) => {
  const [data, setData] = useState(news_data);
  return (
    <section className={styles.latest}>
        <div className={styles.latest_shape} ></div>
        <h3>{title}</h3>
        <div className={styles.list}>
            {data.map(item => <CardLatest id={item.id} date={item.date} title={item.title} img={item.img}/>)}
        </div>
    </section>
  )
}

export default LatestNews