import React, { useState, useEffect } from 'react';
import bgImage from "../assets/pillar.jpg";
import { FaLink } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomeBlog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/admin/getAllBlogs'); // Update the URL with your API endpoint
                if (response.data) {
                    // Sort blogs by date (assuming blogs have a `date` field)
                    const sortedBlogs = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                    // Limit to the latest 4 blogs
                    setBlogs(sortedBlogs.slice(0, 4));
                }
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className='w-full min-h-[100vh]'>
            <div className='w-full flex flex-col sm:flex-row min-h-[80vh]'>
                <div className='w-full sm:w-[65%] min-h-[80vh] p-4 sm:p-6 md:p-10 lg:p-16'>

                    <div className='w-full flex justify-start items-center gap-6'>
                        <h2 className='text-xl sm:text-2xl font-bold tracking-wider text-secondary uppercase'>Blogs & Updates</h2>
                        <div className='md:w-[40%] xl:w-[60%] h-[2px] bg-gray-300 rounded-md mt-2'></div>
                    </div>
                    <Link to={"/blog"} className='text-base text-prime hover:underline underline-offset-2'>Read all blogs</Link>

                    <div className='w-full h-[80%] mt-2 md:mt-8 flex flex-col xl:flex-row gap-8 py-2'>
                        <div className='w-full xl:w-[50%] h-full bg-white '>
                            {blogs[0] && (
                                <>
                                    <img
                                        src={blogs[0].photo || bgImage}
                                        alt=""
                                        className='w-full h-60 object-cover mb-2'
                                    />
                                    <p className='text-base sm:text-xl font-bold'>{blogs[0].title}</p>
                                    <p className='text-sm sm:text-base font-semibold text-gray-400'>
                                        {new Date(blogs[0].date).toLocaleDateString("en-GB")}{" "}
                                        {new Date(blogs[0].date).toLocaleTimeString("en-US", {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            hour12: true,
                                        })}
                                        <Link to={"/blog"} className='ml-3 text-sm underline font-light text-black underline-offset-1'>Read more</Link>
                                    </p>
                                </>
                            )}
                        </div>
                        <div className='w-full xl:w-[50%] h-full'>
                            {blogs.slice(1).map((blog, index) => (
                                <div key={index} className='w-full flex items-center gap-4 mb-6'>
                                    <div className='w-[20%]'>
                                        <img
                                            src={blog.photo || bgImage}
                                            alt=""
                                            className='w-[100%] h-20 object-cover'
                                        />
                                    </div>
                                    <div className='w-[80%]'>
                                        <p className='text-base font-bold'>{blog.title}</p>
                                        <p className='font-semibold text-gray-400 text-sm'>
                                            {new Date(blog.date).toLocaleDateString("en-GB")}{" "}
                                            {new Date(blog.date).toLocaleTimeString("en-US", {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                                hour12: true,
                                            })}
                                            <Link to={"/blog"} className='ml-3 underline font-light text-black underline-offset-1'>Read more</Link>
                                        </p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='relative w-full sm:w-[35%] py-6 sm:py-0 sm:min-h-[80vh] bg-secondary flex justify-center items-center '>
                    <div
                        className='absolute inset-0 w-full'
                        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    ></div>
                    <div className="w-full absolute inset-0 flex items-center justify-start bg-[#0e1522] bg-opacity-80 "></div>
                    <div className='relative w-[80%] mx-auto flex flex-col md:p-10 text-primary '>
                        <h3 className='text-white text-xl sm:text-2xl font-semibold mb-4 py-2 sm:mb-8 flex items-center gap-4'>
                            <FaLink />Quick Links
                        </h3>
                        <Link to={"/blog"} className='mb-4 border-b border-gray-500 pb-3 tracking-wider font-bold cursor-pointer'>Blog</Link>
                        <Link to={"/staffs"} className='mb-4 border-b border-gray-500 pb-3 tracking-wider font-bold cursor-pointer'>Staff</Link>
                        <Link to={"/about"} className='mb-4 border-b border-gray-500 pb-3 tracking-wider font-bold cursor-pointer'>About</Link>
                        <Link to={"/sports"} className='mb-4 border-b border-gray-500 pb-3 tracking-wider font-bold cursor-pointer'>Sports</Link>
                        <Link to={"/gallery"} className='mb-4 border-b border-gray-500 pb-3 tracking-wider font-bold cursor-pointer'>Gallery</Link>
                        <Link to={"/calender"} className='mb-4 border-b border-gray-500 pb-3 tracking-wider font-bold cursor-pointer'>Calender</Link>
                    </div>
                </div>
            </div>

            <div className='hidden w-full h-36 bg-gray-200 md:flex'>
                <div className='w-[65%] h-full'>

                </div>
                <div className='w-[35%] h-full bg-prime'>

                </div>
            </div>
        </div>
    );
};

export default HomeBlog;
