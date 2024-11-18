import React from "react";
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaInstagram, } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

const Topbar = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="w-full bg-secondary text-white md:px-20 text-xs lg:text-sm tracking-wider py-3">
                    <div className="flex flex-col md:flex-row items-center xl:justify-between justify-center">

                        {/* Left Side: Address and Email */}
                        <div className=" hidden xl:flex justify-center items-center md:gap-6">
                            <div className="hidden lg:flex items-center gap-1 text-white">
                                <MdLocationPin className="text-primary w-4 h-4 rounded-full " />
                                <a href="#" className="text-white font-light tracking-wider">
                                    Address
                                </a>
                            </div>
                            <div className="flex items-center gap-1 hover:text-white">
                                <IoMdMail className="text-primary w-4 h-4 rounded-full " />
                                <a href="#" className="hover:underline underline-offset-4  text-white font-light tracking-wider">
                                    example@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-1 hover:text-white">
                                <FaSquarePhone className="text-primary w-4 h-4 rounded-full " />
                                <p className="text-white  tracking-widest font-light">9994476524</p>
                            </div>
                        </div>

                        {/* Center: Phone */}


                        {/* Right Side: Social Icons */}
                        <div className="flex items-center md:mt-0">
                            <span className=" text-white mr-3 font-light">24x7 Support</span>
                            <a href="#" className="text-primary hover:text-white border-s-[1px] border-white px-2">
                                <FaFacebookF className="w-4 h-4" />
                            </a>
                            <a href="#" className="text-primary hover:text-white border-s-[1px] border-white px-2">
                                <FaInstagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="text-primary hover:text-white border-x-[1px] border-white px-2">
                                <FaWhatsapp className="w-4 h-4" />
                            </a>
                            <div className="flex items-center gap-1 hover:text-white ml-3">
                                <FaSquarePhone className="text-primary w-4 h-4 rounded-full " />
                                <p className="text-white  tracking-widest font-light">9994476524</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Topbar;
