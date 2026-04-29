import React, { useState } from 'react'
import CardRecent from './CardRecent';
import styles from "./RecentPosts.module.scss"
import Title1 from '../../common/Title1/Title1';

const RecentPosts = ({posts}) => {
    const [data, setData] = useState(posts);
  return (
    <section className={styles.recent_posts}>
        <Title1 name="Read Recent Post"/>
        <div className={styles.recent_posts_cards}>
            {data.map(item => <CardRecent post={item} key={item.id}/>)}
        </div>
    </section>
  )
}

export default RecentPosts