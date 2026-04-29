import React from 'react'
import styles from "./Textblog.module.scss"
import Title2 from "../../common/Title2/Title2"

const TextBlog = ({blog}) => {
  return (
    <section className={styles.text_blog}>
        <img src={blog.img} alt="" />
        <div>
            <Title2 new_styles={{marginBottom: '20px'}} name={blog.title1} />
            <p>{blog.text}</p>
        </div>
    </section>
  )
}

export default TextBlog