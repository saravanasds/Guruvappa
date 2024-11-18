import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/gh.png"

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

        // Attach the event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // Add a scroll listener
    useEffect(() => {
        const handleScroll = () => {
            // Check if the page is scrolled by more than 50 pixels (adjust threshold as needed)
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className='w-full z-50'>
            <div className="w-full mx-auto">
                <div className="flex items-center justify-between ">
                    <div className="flex flex-col items-center justify-between w-full ">
                        <div className="flex-shrink-0 text-secondary my-2 flex justify-center items-center gap-4">
                            <img src={logo} alt="" className='w-16 h-16' />
                            <h1 className="uppercase font-bold sm:text-3xl tracking-widest">Guruvappa Higher Secondary School</h1>
                        </div>
                        <div
                            className={`bg-white w-full hidden md:block tracking-wider px-6 py-2 text-black nav z-50 top-0 uppercase text-sm ease-in-out ${isScrolled
                                    ? 'fixed bg-white shadow-lg py-6 transform transition-all duration-500 '
                                    : 'relative '
                                }`}
                        >
                            <div className="w-full flex items-baseline space-x-6 xl:space-x-10 flex-wrap justify-center font-bold">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link-active" : "nav-link"
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to="/infratructure"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Infratructure
                                </NavLink>
                                <div className="relative" ref={dropdownRef}>
                                    <div
                                        onMouseEnter={() => setIsDropdownOpen(true)}
                                        // onMouseLeave={() => setIsDropdownOpen(false)}
                                        className="flex items-center cursor-pointer"
                                    >
                                        <NavLink
                                            to="#"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "nav-link flex items-center"
                                                    : "nav-link flex items-center"
                                            }
                                        >
                                            Academics
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 ml-1 transform transition-transform mt-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.07a.75.75 0 111.08 1.04l-4.25 4.67a.75.75 0 01-1.08 0l-4.25-4.67a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </NavLink>
                                    </div>
                                    {isDropdownOpen && (
                                        <div
                                            className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md"
                                            onMouseEnter={() => setIsDropdownOpen(true)}
                                            onMouseLeave={() => setIsDropdownOpen(false)}
                                        >
                                            <NavLink
                                                to="/calender"
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 "
                                            >
                                                Calender
                                            </NavLink>
                                            <NavLink
                                                to="/subjects"
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 "
                                            >
                                                Subjects
                                            </NavLink>

                                            <NavLink
                                                to="/curriculam"
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 "
                                            >
                                                Curriculam
                                            </NavLink>
                                        </div>
                                    )}
                                </div>
                                <NavLink
                                    to="/sports"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Sports
                                </NavLink>
                                <NavLink
                                    to="/achivements"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Achivements
                                </NavLink>
                                <NavLink
                                    to="/alumini"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Alumini
                                </NavLink>
                                <NavLink
                                    to="/gallery"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Gallery
                                </NavLink>
                                <NavLink
                                    to="/admission"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Admission
                                </NavLink>
                                <NavLink
                                    to="/staffs"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Staffs
                                </NavLink>
                                <NavLink
                                    to="/blog"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Blog
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Contact
                                </NavLink>

                            </div>

                        </div>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#3E4095] hover:text-[#3E4095] hover:bg-white focus:outline-none"
                        >
                            {!isOpen ? (
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

            {isOpen && (
                <div className="md:hidden w-full min-h-screen bg-gray-200 absolute">
                    <div className="px-2 py-2 pb-4 space-x-8 sm:px-3 text-[14px] sm:text-[16px] font-bold flex flex-col">

                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/infratructure"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Infratructure
                        </NavLink>

                        <NavLink
                            to="/academics"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Academics
                        </NavLink>
                        <NavLink
                            to="/sports"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Sports
                        </NavLink>
                        <NavLink
                            to="/curriculam"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Curriculam
                        </NavLink>
                        <NavLink
                            to="/achivements"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Achivements
                        </NavLink>
                        <NavLink
                            to="/alumini"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Alumini
                        </NavLink>
                        <NavLink
                            to="/gallery"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Gallery
                        </NavLink>
                        <NavLink
                            to="/admission"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Admission
                        </NavLink>
                        <NavLink
                            to="/subjects"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Subjects
                        </NavLink>
                        <NavLink
                            to="/staffs"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Staffs
                        </NavLink>
                        <NavLink
                            to="/calender"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Calender
                        </NavLink>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Contact
                        </NavLink>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
