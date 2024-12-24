import React, { useEffect, useState } from 'react';
import bgImage from "../assets/computer.jpg"
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';

const HomeContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/admin/addMessage', formData);
            if (response.status === 201) {
                alert('Thank you for your Messaging!');
                setSuccessMessage('Thank you for your Messaging!');
                setFormData({ name: '', email: '', message: '' });
                window.location.reload();
            }
        } catch (error) {
            setErrorMessage('Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='relative w-full min-h-[90vh] flex flex-col items-center justify-center'>
                {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
                {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}
                <div className='absolute inset-0 w-full' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "top" }}></div>
                <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-l from-secondary via-[#1b2945f4] to-[#1b294545]"></div>
                <div className='relative w-full sm:w-[80%] min-h-[70vh] flex gap-1'>
                    <div className='hidden lg:block w-full min-h-[70vh]'>

                    </div>
                    <div className='w-full min-h-[70vh] p-4'>
                        <h3 className='text-white text-2xl sm:text-3xl text-center lg:text-left font-bold tracking-wider mb-8'>Contact Us</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-300 font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#3B4B6B] rounded-[3px] shadow-sm focus:outline-none text-white"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#3B4B6B] rounded-[3px] shadow-sm focus:outline-none text-white"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 font-medium mb-1">Message</label>
                                <textarea
                                    type="text"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#3B4B6B] rounded-[3px] shadow-sm focus:outline-none text-white"
                                    placeholder="Write your message here"
                                    rows="4"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className='w-full py-2 px-4 rounded-[3px] shadow-lg bg-prime text-white font-semibold tracking-wider hover:bg-primary hover:text-secondary transform transition-all duration-700'
                                >
                                    {loading ? <ClipLoader size={25} color={"#123abc"} loading={loading} /> : 'Send Message'}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeContact