import React, { useEffect } from 'react'
import BlogHero from '../Blog-Components/BlogHero'
import Blogs from '../Blog-Components/Blogs'

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <BlogHero />
      <Blogs />
    </div>
  )
}

export default Blog