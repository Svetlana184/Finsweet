import React from 'react'
import styles from "./Textblog.module.scss"

const TextBlog = ({blog}) => {
  return (
    <section className={styles.text_blog}>
        <img src={blog.img} alt="" />
        <div>
            <h3>{blog.title1}</h3>
            <p>{blog.text}</p>
        </div>
    </section>
  )
}

export default TextBlog