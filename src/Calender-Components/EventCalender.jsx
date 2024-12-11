import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

const EventCalendar = () => {
    const [events, setEvents] = useState({});
    const [selectedDate, setSelectedDate] = useState(null);


    // Fetch events from backend
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/admin/getCalenderEvent");
                const eventMap = {};
                response.data.forEach((event) => {
                    eventMap[event.date] = event.description;
                });
                setEvents(eventMap);
            } catch (err) {
                console.error("Error fetching events:", err);
            }
        };

        fetchEvents();
    }, []);

    const formatDate = (date) => {
        const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
        return offsetDate.toISOString().split("T")[0];
    };

    
    return (
        <div className="w-[90%] mx-auto bg-gray-50 p-8 flex justify-center gap-8">

            {/* Calendar Section */}
            <div className="w-[70%] bg-white shadow-lg rounded-lg p-6">
                <Calendar
                    className="w-full text-xl p-4"
                    onClickDay={(value) => setSelectedDate(formatDate(value))}
                    tileContent={({ date }) => {
                        const eventDate = formatDate(date);
                        return events[eventDate] ? (
                            <div className="w-2 h-2 bg-red-500 rounded-full mx-auto mt-1"></div>
                        ) : null;
                    }}
                />
            </div>

            {/* Event Details Section */}
            <div className="w-[30%] p-6 bg-white shadow-lg rounded-lg flex justify-center items-center text-center">
                {selectedDate && events[selectedDate] ? (
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Event Details for {selectedDate}
                        </h3>
                        <p className="text-lg text-gray-600 mt-4">
                            {events[selectedDate]}
                        </p>
                    </div>
                ) : selectedDate ? (
                    <p className="text-lg text-gray-600">
                        No events on <span className="font-semibold">{selectedDate}</span>.
                    </p>
                ) : (
                    <p className="text-lg text-gray-600">
                        Click on a date to view event details.
                    </p>
                )}
            </div>

        </div>
    );
};

export default EventCalendar;
