import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";

const GalleryEvent = () => {
    const [eventId, setEventId] = useState('');
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate(); // Hook to handle navigation

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/admin/getAllEvents');
                setEvents(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching events:', error);
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className='w-full min-h-screen'>
            {/* Display Events */}
            <div className="w-[90%] mx-auto py-10">
                <h2 className="text-xl font-semibold text-white">Events</h2>
                {loading ? (
                    <p>Loading events...</p>  // Display a loading message while events are being fetched
                ) : (
                    <div className="mt-3 grid grid-cols-4 gap-5">
                        {Array.isArray(events) && events.length > 0 ? (
                            events.map((event) => (
                                <div
                                    key={event._id}
                                    className="bg-white p-2 rounded shadow-md "
                                >
                                    <img src={event.thumbnail} alt={event.title}
                                        onClick={() => navigate(`/gridGallery/${event._id}`)}
                                        className="w-full h-48 object-cover cursor-pointer" />
                                    <div className='flex justify-between items-center'>
                                        <h3 className="text-lg font-semibold py-2 hover:underline cursor-pointer"
                                            onClick={() => navigate(`/gridGallery/${event._id}`)} >
                                            {event.title}
                                        </h3>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className='text-gray-300'>No events found.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default GalleryEvent