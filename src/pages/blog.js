import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import BlogCard from '../components/blog-card';
import Layout from '../components/layout'

const Blog = () => {
  return (
    <Layout>
      <BlogCard />
      <BlogCard />
    </Layout>
  )
}

export default Blog;
