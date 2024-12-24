import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import BlogHero from '../Blog-Components/BlogHero';
import Blogs from '../Blog-Components/Blogs';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <Helmet>
        <title>Blog - Guruvappa School</title>
        <meta name="description" content="Read the latest blogs, articles, and updates from Guruvappa School. Stay informed about school events, news, and more." />
        <meta name="keywords" content="Guruvappa School blog, school updates, school news, educational blog, events, articles" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Blog - Guruvappa School" />
        <meta property="og:description" content="Explore the latest blogs from Guruvappa School. Get insights into events, activities, and news from the school." />
        <meta property="og:image" content="https://guruvappaschool.in/blog-cover.jpg" />
        <meta property="og:url" content="https://guruvappaschool.in/blog" />
        <meta property="og:type" content="website" />
      </Helmet>
      <BlogHero />
      <Blogs />
    </div>
  );
}

export default Blog;
