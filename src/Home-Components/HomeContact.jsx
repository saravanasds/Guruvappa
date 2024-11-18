import React from 'react'
import bgImage from "../assets/contact-gh.jpg"

const HomeContact = () => {
    return (
        <>
            <div className='relative w-full min-h-[90vh] flex flex-col items-center justify-center'>
                <div className='absolute inset-0 w-full' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-l from-secondary via-[#1b2945f4] to-[#1b29458d]"></div>
                <div className='relative w-[80%] min-h-[70vh] flex gap-1'>
                    <div className='w-full min-h-[70vh]'>

                    </div>
                    <div className='w-full min-h-[70vh] p-4'>
                        <h3 className='text-white text-3xl font-bold tracking-wider mb-8'>Contact Us</h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-300 font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full px-4 py-3 bg-[#3B4B6B] rounded-[3px] shadow-sm focus:outline-none text-white"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full px-4 py-3 bg-[#3B4B6B] rounded-[3px] shadow-sm focus:outline-none text-white"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 font-medium mb-1">Message</label>
                                <textarea
                                    name="message"
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
                                    {/* {loading ? <ClipLoader size={25} color={"#123abc"} loading={loading} /> : 'Send Message'} */}
                                    Send Message
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <div className='relative w-full min-h-[30vh] bg-[#1B2434]'>

            </div>
        </>
    )
}

export default HomeContact