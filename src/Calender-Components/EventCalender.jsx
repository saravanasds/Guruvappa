import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

const EventCalendar = () => {
    const [events, setEvents] = useState({});
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedMonthEvents, setSelectedMonthEvents] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    // Fetch events from backend
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/admin/getCalenderEvent"
                );
                const eventMap = {};
                response.data.forEach((event) => {
                    eventMap[event.date] = event.description;
                });
                setEvents(eventMap);

                // Display events for the current month by default
                const currentDate = new Date();
                handleMonthChange(currentDate, eventMap);
            } catch (err) {
                console.error("Error fetching events:", err);
            }
        };

        fetchEvents();
    }, []);

    // Format date to YYYY-MM-DD
    const formatDate = (date) => {
        const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
        return offsetDate.toISOString().split("T")[0];
    };

    // Handle month change to fetch all events in the selected month
    const handleMonthChange = (value, eventsData = events) => {
        const selectedMonth = value.getMonth();
        const selectedYear = value.getFullYear();
        const monthEvents = Object.entries(eventsData).filter(([date]) => {
            const eventDate = new Date(date);
            return (
                eventDate.getMonth() === selectedMonth &&
                eventDate.getFullYear() === selectedYear
            );
        });
        setSelectedMonthEvents(monthEvents);
    };

    // Handle date click for popup
    const handleDateClick = (value) => {
        const formattedDate = formatDate(value);
        setSelectedDate(formattedDate);
        setShowPopup(true);
    };

    return (
        <div className="w-full md:w-[90%] mx-auto p-2 xs:p-4 md:p-8 flex flex-col lg:flex-row justify-center gap-4 lg:gap-8">
            {/* Calendar Section */}
            <div className="w-full lg:w-[70%] bg-white shadow-lg rounded-lg sm:p-6">
                <Calendar
                    className="w-full text-sm sm:text-xl p-2 xs:p-4"
                    onActiveStartDateChange={({ activeStartDate }) =>
                        handleMonthChange(activeStartDate)
                    }
                    onClickDay={(value) => handleDateClick(value)}
                    tileContent={({ date }) => {
                        const eventDate = formatDate(date);
                        return events[eventDate] ? (
                            <div className="w-2 h-2 bg-green-600 rounded-full mx-auto mt-1"></div>
                        ) : null;
                    }}
                />
            </div>

            {/* Events for the Month */}
            <div className="w-full lg:w-[30%] p-4 sm:p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                    Events in this Month
                </h3>
                <ul className="mt-4 text-gray-600">
                    {selectedMonthEvents.length > 0 ? (
                        selectedMonthEvents.map(([date, description]) => (
                            <li key={date} className="mb-2">
                                <span className="font-semibold">{date}: </span>
                                {description}
                            </li>
                        ))
                    ) : (
                        <p>No events for this month.</p>
                    )}
                </ul>
            </div>

            {/* Event Details Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Event Details
                        </h3>
                        {selectedDate && events[selectedDate] ? (
                            <p className="mt-4 text-lg text-gray-600">
                                {events[selectedDate]}
                            </p>
                        ) : (
                            <p className="mt-4 text-lg text-gray-600">No events on this date.</p>
                        )}
                        <button
                            className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg"
                            onClick={() => setShowPopup(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventCalendar;
