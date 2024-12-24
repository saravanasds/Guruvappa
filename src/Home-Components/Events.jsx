import React, { useState, useEffect } from 'react';
import bgImage from "../assets/ncc.jpg";
import { FaLink } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/admin/getAllUpComingEvent');
                if (response.data) {
                    // Sort events by date in descending order
                    const sortedEvents = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                    // Limit to the latest 3 events
                    setEvents(sortedEvents.slice(0, 3));
                }
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };
        fetchEvents();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' }).toUpperCase(); // Short month name
        const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // HH:MM AM/PM format
        return { day, month, time };
    };

    return (
        <div className='w-full min-h-[80vh]'>
            <div className='w-full flex flex-col lg:flex-row min-h-[80vh]'>

                <div className='hidden relative w-[35%] min-h-[80vh] bg-secondary lg:flex justify-center items-center'>
                    <div className='absolute inset-0 w-full' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                    <div className="absolute inset-0 flex items-center justify-start bg-secondary bg-opacity-90"></div>
                    <div className='relative w-[80%] mx-auto flex flex-col p-10 text-primary'>
                        <h3 className='text-white text-2xl font-semibold mb-8 flex items-center gap-4'><FaLink />Quick Links</h3>
                        <Link to={"/blog"} className='mb-4 border-b border-gray-500 pb-3 tracking-wider font-bold cursor-pointer'>Blog</Link>
                        <Link to={"/staffs"} className='mb-4 border-b border-gray-500 pb-3 tracking-wider font-bold cursor-pointer'>Staff</Link>
                        <Link to={"/about"} className='mb-4 border-b border-gray-500 pb-3 tracking-wider font-bold cursor-pointer'>About</Link>
                        <Link to={"/sports"} className='mb-4 border-b border-gray-500 pb-3 tracking-wider font-bold cursor-pointer'>Sports</Link>
                        <Link to={"/gallery"} className='mb-4 border-b border-gray-500 pb-3 tracking-wider font-bold cursor-pointer'>Gallery</Link>
                        <Link to={"/calender"} className='mb-4 border-b border-gray-500 pb-3 tracking-wider font-bold cursor-pointer'>Calender</Link>
                    </div>
                </div>

                <div className='w-full flex flex-col-reverse md:flex-row justify-center items-center'>

                    <div className='w-full md:w-[50%] lg:w-full md:min-h-[80vh] p-4 sm:p-8 md:p-16'>

                        <div className='w-full flex justify-start items-center gap-6'>
                            <h2 className='text-lg sm:text-2xl font-bold tracking-wider text-secondary uppercase'>Upcoming Events</h2>
                            <div className='xl:w-[30%] h-[2px] bg-gray-300 rounded-md mt-2'></div>
                        </div>

                        <div className='w-full h-[80%] mt-4 sm:mt-8 flex gap-2 py-2'>
                            <div className='w-full h-full'>
                                {events.map((event) => {
                                    const { day, month, time } = formatDate(event.date);
                                    return (
                                        <div key={event._id} className='w-full flex items-center gap-6 mb-6'>
                                            <div className='flex flex-col items-center font-bold border-b-4 border-prime pb-2'>
                                                <span className='text-2xl sm:text-3xl font-extrabold text-prime'>{day}</span>
                                                <span className='text-sm sm:text-lg'>{month}</span>
                                            </div>
                                            <div>
                                                <p className='text-lg sm:text-xl font-bold mb-2'>{event.title}</p>
                                                <p className='font-semibold flex items-center gap-2 text-prime'>
                                                    <MdOutlineAccessTime /> {time}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-[50%] lg:w-full md:min-h-[80vh] bg-white flex flex-col justify-center items-center md:items-start md:pr-8 px-4 pt-4 md:p-8 '>
                        <img src={bgImage} alt="guruvappa school event" className='w-full h-80 object-cover' />
                        <p className='w-full py-3 font-semibold text-gray-400'>June 6, 2024/ Admission, Student</p>
                        <p className='w-full text-lg sm:text-xl font-semibold'>Professor Albert joint research on mobile money in Tanzania</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Events;
