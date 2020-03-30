import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import BlogCard from '../components/blog-card';
import Layout from '../components/layout'

const Blog = () => {
  return (
    <Layout>
      <div>123</div>
      <BlogCard />
    </Layout>
  )
}

export default Blog;
