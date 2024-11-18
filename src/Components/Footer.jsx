import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/gh.png"
import { FaFacebookF, FaInstagram, } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
// import ImageBG from "../assets/et-footer.png"


function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            className="bg-[#202020] text-gray-300 relative"
        // style={{
        //     backgroundImage: `url(${ImageBG})`,
        //     backgroundSize: 'contain',
        //     backgroundBlendMode: 'blend',
        //     backgroundColor: '#455d7a',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundPosition: 'center',
        // }}
        >
            <div className="bg-[#0c0c0c] bg-opacity-80 py-8 md:py-20 backdrop-blur-[2px]">
                <div className="w-full mx-auto flex flex-col justify-center items-center px-6 text-sm sm:text-[16px]">
                    {/* Clinic Overview */}
                    <div className="w-full flex flex-col items-center mb-16" data-aos="fade-right">
                        <div className="flex-shrink-0 text-gray-300 flex justify-center items-center gap-4">
                            <img src={logo} alt="" className='w-16 h-16' />
                            <h1 className="uppercase font-bold sm:text-3xl tracking-widest text-gray-300">Guruvappa Higher Secondary School</h1>

                        </div>
                        <p className="text-center text-sm tracking-wider">
                            Description for some words
                        </p>
                    </div>

                    {/* Grid for 4 Columns */}
                    <div
                        className="w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 xl:gap-20 place-items-center "
                        data-aos="fade-up"
                    >
                        {/* Quick Links with Icons */}
                        <div className="w-full flex flex-col justify-center items-start mb-8 sm:mb-0 " data-aos="fade-right">
                            <h2 className="w-full pb-2 text-lg font-semibold mb-4 text-left text-gray-300 border-b border-prime">Academics</h2>
                            <ul className="space-y-2 flex flex-col gap-2 ">
                                <li className="flex items-center space-x-2">

                                    <Link to="/" onClick={scrollToTop} className=" hover:text-prime">
                                        Subjects and Syllabus
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-2">

                                    <Link to="/sports" onClick={scrollToTop} className=" hover:text-prime">
                                        Sports and Gamings
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-2">

                                    <Link to="/curriculam" onClick={scrollToTop} className=" hover:text-prime">
                                        Extra Curriculam Activities
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-2">

                                    <Link to="/calender" onClick={scrollToTop} className=" hover:text-prime">
                                        Calender of the Current Year
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full flex flex-col justify-center items-start mb-8 sm:mb-0 " data-aos="fade-right">
                            <h2 className="w-full pb-2 text-lg font-semibold mb-4 text-left text-gray-300 border-b border-prime">Quick Links</h2>
                            <ul className="space-y-2 flex flex-col gap-2 ">
                                <li className="flex items-center space-x-2">

                                    <Link to="/" onClick={scrollToTop} className=" hover:text-prime">
                                        Blogs and Updates
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-2">

                                    <Link to="/achivement" onClick={scrollToTop} className=" hover:text-prime">
                                        Achivements in Guruvappa
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-2">

                                    <Link to="/alumni" onClick={scrollToTop} className=" hover:text-prime">
                                        Alumni and Meetings
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-2">

                                    <Link to="/gallery" onClick={scrollToTop} className=" hover:text-prime">
                                        Gallery of Guruvappa
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full flex flex-col justify-center items-start mb-8 sm:mb-0 " data-aos="fade-right">
                            <h2 className="w-full pb-2 text-lg font-semibold mb-4 text-left text-gray-300 border-b border-prime">Other Links</h2>
                            <ul className="space-y-2 flex flex-col gap-2 ">
                                <li className="flex items-center space-x-2">

                                    <Link to="/" onClick={scrollToTop} className=" hover:text-prime">
                                        Staffs Details in our School
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-2">

                                    <Link to="/about" onClick={scrollToTop} className=" hover:text-prime">
                                        Infrastructure of Campus
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-2">

                                    <Link to="/services" onClick={scrollToTop} className=" hover:text-prime">
                                        Admission Details for Students
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-2">

                                    <Link to="/contact" onClick={scrollToTop} className=" hover:text-prime">
                                        About of our School
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full flex flex-col justify-center items-start mb-8 sm:mb-0 " data-aos="fade-right">
                            <h2 className="w-full pb-2 text-lg font-semibold mb-4 text-left text-gray-300 border-b border-prime">Address and Details</h2>
                            <ul className="space-y-2 flex flex-col gap-2 ">
                                <li className="flex items-center space-x-2">
                                    SKC Nagar, Neikkarapatti,
                                </li>
                                <li className="flex items-center space-x-2">
                                    Palani - 624615, Dindigul,
                                </li>
                                <li className="flex items-center space-x-2">
                                    Tamil nadu, India
                                </li>
                                <li className="flex items-center space-x-2">
                                    Monday - Saturday
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className='w-[80%] min-h-[15vh] mx-auto flex justify-between '>

                <div className="min-h-[15vh] flex items-center" >
                    <p className='text-sm sm:text-lg text-gray-400'>
                        <span className="text-cyan-600">&copy; {new Date().getFullYear()} </span>
                        Guruvappa. All rights reserved.
                    </p>
                </div>

                {/* Right Side: Social Icons */}
                <div className="flex items-center md:mt-0">

                    <a href="#" className="text-prime hover:text-gray-300 px-2">
                        <FaFacebookF className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-prime hover:text-gray-300  px-2">
                        <FaInstagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-prime hover:text-gray-300 px-2">
                        <FaWhatsapp className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-prime hover:text-gray-300 px-2">
                        <FaSquarePhone className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
