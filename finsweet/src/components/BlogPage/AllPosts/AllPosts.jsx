import React, { useState } from 'react'
import AllCard from './AllCard';
import styles from "./AllPosts.module.scss"
import Title1 from '../../common/Title1/Title1';

const AllPosts = ({posts}) => {
  const [data, setData] = useState(posts);
  return (
    <section className={styles.all_posts}>
        <Title1 name="All posts"/>
        <div className={styles.all_posts_cards}>
            {data.map(item => <AllCard post={item} key={item.id}/>)}
        </div>
    </section>
  )
}

export default AllPosts