import React from 'react'
import {Link} from "react-router-dom"
import styles from "./HeaderPost.module.scss"
import shape from "../../../assets/shapes/about_shape.svg"
import shape_right from "../../../assets/shapes/process_shape.svg"
import SimpleTag from '../../common/SimpleTag/SimpleTag'
import SimpleLink from '../../common/SimpleLink/SimpleLink'
import Title1 from '../../common/Title1/Title1'

const HeaderPost = ({blog, posts}) => {
  return (
    <section className={styles.header_post}>
        <div className={styles.title_blog_text}>
            <div className={styles.title_square}></div>
                <SimpleTag tag="TRENDING"/>
                <Title1 name={blog.title}/>
                <p>{blog.short_desc}</p>
                <SimpleLink path="/" text="Read more"/>
                <div className={styles.title_author}>
                    <img src={blog.pic_author} alt="" />
                    <h6>{blog.name_author}</h6>
                    <div></div>
                    <p>Posted on {blog.date}</p>
                </div>
                <div className={styles.title_pic}>
                    <img className={styles.title_pic_blog} src={blog.img} alt="" />
                    <img className={styles.title_pic_shape} src={shape} alt="" />
                </div>
            
        </div>
        <div className={styles.header_post_right}>
            <img className={styles.header_post_shape} src={shape_right} alt="" />
            <ul>
                {posts.map(item => 
                <li key={item.id}>
                    <h4>{item.title}</h4>
                    <div>
                        <img src={item.pic_author} alt="" />
                        <div>
                            <h6>{item.name_author}</h6>
                            <p>{item.date}</p>
                        </div>
                    </div>
                </li>)}
            </ul>
        </div>
    </section>
  )
}

export default HeaderPost