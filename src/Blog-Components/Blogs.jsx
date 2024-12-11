import React, { useState, useRef, useEffect } from 'react';
import blog1 from '../assets/sports.jpg';
import blog2 from '../assets/academic.jpg';
import blog3 from '../assets/plant.jpg';

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            image: blog1,
            title: 'Professor Albert joint research on mobile money in Tanzania',
            date: 'June 6, 2024/ Admission, Student',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed adipisci similique consequatur ex dicta! Eum est dolorem, ex minima, at rerum suscipit modi sit itaque eaque qui hic deleniti placeat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed adipisci similique consequatur ex dicta! Eum est dolorem, ex minima, at rerum suscipit modi sit itaque eaque qui hic deleniti placeat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed adipisci similique consequatur ex dicta! Eum est dolorem, ex minima, at rerum suscipit modi sit itaque eaque qui hic deleniti placeat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed adipisci similique consequatur ex dicta! Eum est dolorem, ex minima, at rerum suscipit modi sit itaque eaque qui hic deleniti placeat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed adipisci similique consequatur ex dicta! Eum est dolorem, ex minima, at rerum suscipit modi sit itaque eaque qui hic deleniti placeat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed adipisci similique consequatur ex dicta! Eum est dolorem, ex minima, at rerum suscipit modi sit itaque eaque qui hic deleniti placeat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed adipisci similique consequatur ex dicta! Eum est dolorem, ex minima, at rerum suscipit modi sit itaque eaque qui hic deleniti placeat.',
        },
        {
            id: 2,
            image: blog2,
            title: 'Professor Albert joint research on mobile money in Tanzania',
            date: 'June 6, 2024/ Admission, Student',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit... ex minima, at rerum suscipit modi sit itaque eaque qui hic deleniti placeat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed adipisci similique consequatur ex dicta! Eum est dolorem, ex minima, at rerum suscipit modi sit itaque eaque qui hic deleniti placeat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed adipisci similique consequatur ex dicta! Eum est dolorem, ex minima, at rerum suscipit modi sit itaque eaque qui hic deleniti placeat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed adipisci similique consequatur ex dicta! Eum est dolorem, ex minima, at rerum suscipit modi sit itaque eaque qui hic deleniti placeat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed adipisci similique consequatur ex dicta! Eum est dolorem, ex minima, at rerum suscipit modi sit itaque eaque qui hic deleniti placeat.',
        },
        {
            id: 3,
            image: blog3,
            title: 'Professor Albert joint research on mobile money in Tanzania',
            date: 'June 6, 2024/ Admission, Student',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit... ex minima, at rerum suscipit modi sit itaque eaque qui hic deleniti placeat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed adipisci similique consequatur ex dicta! Eum est dolorem, ex minima, at rerum suscipit modi',
        },
    ];

    const [expanded, setExpanded] = useState({});
    const [contentHeights, setContentHeights] = useState({});
    const contentRefs = useRef({});

    useEffect(() => {
        const heights = {};
        blogs.forEach((blog) => {
            if (contentRefs.current[blog.id]) {
                heights[blog.id] = contentRefs.current[blog.id].scrollHeight;
            }
        });
        setContentHeights(heights);
    }, []);

    const toggleExpand = (id) => {
        setExpanded((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <div className='w-full min-h-screen my-20'>
            <div className='w-[95%] h-full mx-auto'>
                {blogs.map((blog) => (
                    <div key={blog.id} className='w-full flex mb-6 shadow-sm shadow-black rounded-sm bg-gray-100'>
                        <div className='w-[30%] p-2'>
                            <img src={blog.image} alt="" className='w-[100%] h-72 object-cover border-2 border-white rounded-sm' />
                        </div>
                        <div className='w-[80%] my-6 px-10 pr-20 text-justify'>
                            <p className='text-xl font-bold'>{blog.title}</p>
                            <p className='font-semibold text-gray-400'>{blog.date}</p>
                            <div
                                ref={(el) => (contentRefs.current[blog.id] = el)}
                                className={`mt-4 overflow-hidden ${expanded[blog.id] ? 'max-h-screen' : 'max-h-36'
                                    }`}
                                style={{
                                    height: expanded[blog.id] ? 'auto' : `min(${contentHeights[blog.id] || 0}px, 18rem)`,
                                }}
                            >
                                <p>{blog.content}</p>
                            </div>
                            {contentHeights[blog.id] > 200 && !expanded[blog.id] && (
                                <button
                                    onClick={() => toggleExpand(blog.id)}
                                    className='mt-2 text-blue-500 hover:underline'
                                >
                                    Read More
                                </button>
                            )}
                            {expanded[blog.id] && (
                                <button
                                    onClick={() => toggleExpand(blog.id)}
                                    className='mt-2 text-blue-500 hover:underline'
                                >
                                    Show Less
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
