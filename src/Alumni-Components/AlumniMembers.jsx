import React, { useEffect, useState } from "react";
import axios from "axios";

const AlumniMembers = () => {
    const [alumnis, setAlumnis] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Fetch enabled alumni data
    useEffect(() => {
        const fetchAlumnis = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/admin/getEnableAlumnis");
                setAlumnis(response.data); // Set the enabled alumni data
            } catch (err) {
                setError("Error fetching alumni");
            } finally {
                setLoading(false);
            }
        };
        fetchAlumnis();
    }, []);

    // Calculate pagination
    const totalPages = Math.ceil(alumnis.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentAlumnis = alumnis.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="w-full md:w-[90%] mx-auto min-h-screen p-4 sm:p-6">
            <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">Our Old Students</h1>
            {currentAlumnis.length > 0 ? (
                currentAlumnis.map((alumni) => (
                    <div key={alumni._id} className="mb-6 border p-4 shadow-md rounded-md shadow-gray-400">
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                            <div>
                                {alumni.photo && (
                                    <img
                                        src={alumni.photo}
                                        alt="guruvappa school old student photo"
                                        className="w-auto h-48 mx-auto"
                                    />
                                )}
                            </div>
                            <div className="mx-auto sm:mx-0 text-center sm:text-left">
                                <p className="text-base sm:text-xl font-bold uppercase sm:mt-4">
                                    {alumni.name}
                                </p>
                                <p className="text-gray-500 font-bold">{alumni.position}</p>
                                <p className="text-sm">Batch {alumni.batch}</p>
                            </div>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 text-justify py-4">
                            {alumni.journey}
                        </p>
                    </div>
                ))
            ) : (
                <p>No alumni members found.</p>
            )}

            {/* Pagination Controls */}
            <div className="flex justify-center mt-6">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-2 sm:px-4 py-1 sm:py-2 mx-1 text-sm font-medium rounded ${currentPage === index + 1
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-600"
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AlumniMembers;
