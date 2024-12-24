import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/g-trans.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    // Close dropdown if clicked outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    // Toggle mobile navbar
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // Add a scroll listener
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="w-full z-50 py-2 px-4 xs:px-8">
            <div className="w-full mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center justify-between w-full">
                        <div className="flex-shrink-0 text-secondary my-2 flex justify-center items-center gap-3 sm:gap-4">
                            <img src={logo} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
                            <div className="my-2 flex flex-col justify-center items-center">
                                <h1 className="uppercase text-left font-bold sm:text-xl md:text-xl lg:text-3xl tracking-normal lg:tracking-widest">
                                    Guruvappa Higher Secondary School
                                </h1>
                                <h2 className="hidden sm:block tracking-wide text-sm lg:text-lg uppercase font-semibold text-center text-gray-500">
                                    Skc Nagar, Neikkarapatti, Palani - 624 615
                                </h2>
                            </div>
                        </div>
                        <div
                            className={`bg-white w-full hidden md:block tracking-wider px-6 py-2 pb-3 text-black nav z-50 top-0 uppercase text-sm ease-in-out ${isScrolled
                                    ? 'fixed bg-white shadow-lg py-6 transform transition-all duration-500'
                                    : 'relative'
                                }`}
                        >
                            <div className="w-full flex items-baseline space-x-6 xl:space-x-12 space-y-2 flex-wrap justify-center font-bold leading-relaxed">
                                {[
                                    { to: "/", label: "Home" },
                                    { to: "/about", label: "About" },
                                    { to: "/infrastructure", label: "Infrastructure" },
                                    { to: "/sports", label: "Sports" },
                                    { to: "/curriculam", label: "Curriculum" },
                                    { to: "/calender", label: "Calendar" },
                                    { to: "/alumini", label: "Alumni" },
                                    { to: "/gallery", label: "Gallery" },
                                    { to: "/staffs", label: "Staff" },
                                    { to: "/blog", label: "Blog" },
                                    { to: "/contact", label: "Contact Us" },
                                ].map((link, index) => (
                                    <NavLink
                                        key={index}
                                        to={link.to}
                                        className={({ isActive }) =>
                                            isActive ? "nav-link-active" : "nav-link"
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#3E4095] hover:text-[#3E4095] hover:bg-white focus:outline-none"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden w-full left-0 right-0 h-auto bg-gray-200 absolute">
                    <div className="w-[90%] mx-auto flex flex-col text-black font-semibold p-4 text-left gap-2 uppercase text-sm tracking-wider">
                        {[
                            { to: "/", label: "Home" },
                            { to: "/about", label: "About" },
                            { to: "/infrastructure", label: "Infrastructure" },
                            { to: "/sports", label: "Sports" },
                            { to: "/curriculam", label: "Curriculum" },
                            { to: "/alumini", label: "Alumni" },
                            { to: "/gallery", label: "Gallery" },
                            { to: "/staffs", label: "Staffs" },
                            { to: "/calender", label: "Calendar" },
                            { to: "/blog", label: "Blog" },
                            { to: "/contact", label: "Contact" },
                        ].map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.to}
                                onClick={toggleNavbar}
                                className={({ isActive }) =>
                                    isActive
                                        ? "border-b-2 border-gray-500 pb-1"
                                        : "border-b-2 border-gray-300 pb-1"
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
