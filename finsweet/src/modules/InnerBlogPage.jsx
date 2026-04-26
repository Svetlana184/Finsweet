import React from 'react'
import TitleBlog from '../components/InnerBlogPage/TitleBlog/TitleBlog'
import TextBlog from '../components/InnerBlogPage/TextBlog/TextBlog'
import {blog_info} from "../mockupData/blogData"
import Subscribe from '../components/common/Subscribe/Subscribe'

const InnerBlogPage = ({blog = blog_info}) => {
  return (
    <>
      <TitleBlog blog={blog_info}/>
      <TextBlog blog={blog_info}/>
      <Subscribe/>
    </>
  )
}

export default InnerBlogPage