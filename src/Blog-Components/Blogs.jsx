import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expanded, setExpanded] = useState({});
    const [contentHeights, setContentHeights] = useState({});
    const contentRefs = useRef({});

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/admin/getAllBlogs');
                if (response.data) setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    useEffect(() => {
        const heights = {};
        blogs.forEach((blog) => {
            if (contentRefs.current[blog._id]) {
                heights[blog._id] = contentRefs.current[blog._id].scrollHeight;
            }
        });
        setContentHeights(heights);
    }, [blogs]);

    const toggleExpand = (id) => {
        setExpanded((prevState) => ({
            ...prevState,
            [id]: !prevState[id], // Toggle expansion for the specific blog
        }));
    };

    if (loading) {
        return <div className="w-full min-h-screen flex items-center justify-center">Loading blogs...</div>;
    }

    return (
        <div className="w-full my-6 md:my-20">
            <div className="w-[95%] mx-auto">
                {blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <div
                            key={blog._id}
                            className="w-full flex flex-wrap lg:flex-nowrap mb-6 shadow-sm shadow-black rounded-sm bg-slate-100"
                        >
                            <div className="w-full lg:w-[30%] p-2">
                                <img
                                    src={blog.photo || 'https://via.placeholder.com/300x200'}
                                    alt={blog.title}
                                    className="w-full h-72 object-cover border-2 border-white rounded-sm"
                                />
                            </div>
                            <div className="w-full lg:w-[70%] py-2 sm:py-6 px-4 sm:px-6 lg:px-10 text-justify">
                                <p className="text-lg sm:text-xl font-bold">{blog.title}</p>
                                <p className="text-xs sm:text-base font-semibold text-gray-400">
                                    {new Date(blog.date).toLocaleDateString("en-GB")}{" "}
                                    {new Date(blog.date).toLocaleTimeString("en-US", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        hour12: true,
                                    })}
                                </p>
                                <div
                                    ref={(el) => (contentRefs.current[blog._id] = el)}
                                    className={`mt-4 overflow-hidden transition-all duration-500 ${expanded[blog._id] ? 'h-auto' : 'max-h-36'
                                        }`}
                                    style={{
                                        height: expanded[blog._id]
                                            ? 'auto'
                                            : `min(${contentHeights[blog._id] || 0}px, 18rem)`,
                                    }}
                                >
                                    <p className='text-base'>{blog.content}</p>
                                </div>
                                {contentHeights[blog._id] > 200 && (
                                    <button
                                        onClick={() => toggleExpand(blog._id)}
                                        className="mt-2 text-blue-500 hover:underline"
                                    >
                                        {expanded[blog._id] ? 'Show Less' : 'Read More'}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No Blogs Found</p>
                )}
            </div>
        </div>
    );
};

export default Blogs;
