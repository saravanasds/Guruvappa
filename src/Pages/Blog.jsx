import React from 'react'
import BlogHero from '../Blog-Components/BlogHero'
import Blogs from '../Blog-Components/Blogs'

const Blog = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <BlogHero />
      <Blogs />
    </div>
  )
}

export default Blog