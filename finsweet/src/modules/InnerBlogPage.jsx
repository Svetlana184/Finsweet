import React from 'react'
import TitleBlog from '../components/InnerBlogPage/TitleBlog/TitleBlog'
import TextBlog from '../components/InnerBlogPage/TextBlog/TextBlog'
import {blog_info} from "../mockupData/blogData"
import Subscribe from '../components/common/Subscribe/Subscribe'
import { useParams } from 'react-router-dom'
import {news} from "../mockupData/newsData"

const InnerBlogPage = () => {
  let {id} = useParams();
  const blog_info = news.find(neww => neww.id == id);
  return (
    <>
      <TitleBlog blog={blog_info}/>
      <TextBlog blog={blog_info}/>
      <Subscribe/>
    </>
  )
}

export default InnerBlogPage