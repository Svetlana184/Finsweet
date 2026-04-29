import React from 'react'
import Subscribe from "../components/common/Subscribe/Subscribe"
import { useParams } from 'react-router-dom'
import {news} from "../mockupData/newsData"
import RecentPosts from '../components/BlogPage/RecentPosts/RecentPosts'
import AllPosts from '../components/BlogPage/AllPosts/AllPosts'
import HeaderPost from '../components/BlogPage/HeaderPost/HeaderPost'

const BlogPage = () => {
  let {id} = useParams();
  const blog_info = news.find(neww => neww.id == id);
  return (
    <>
      <HeaderPost blog={blog_info} posts={news}/>
      <RecentPosts posts={news}/>
      <AllPosts posts={news}/>
      <Subscribe/>
    </>
  )
}

export default BlogPage;