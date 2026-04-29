import React from 'react'
import shape from "../../../assets/shapes/process_shape.svg"
import styles from "./TitleBlog.module.scss"
import Title1 from "../../common/Title1/Title1"

const TitleBlog = ({blog}) => {
  return (
    <section className={styles.title_blog}>
        <div className={styles.title_blog_text}>
            <div className={styles.title_square}></div>
            <Title1 name={blog.title}/>
            <p>{blog.short_desc}</p>
            <div className={styles.title_author}>
                <img src={blog.pic_author} alt="" />
                <h6>{blog.name_author}</h6>
                <div></div>
                <p>Posted on {blog.date}</p>
            </div>
        </div>
        <img className={styles.title_blog_shape} src={shape} alt="" />
    </section>
  )
}

export default TitleBlog