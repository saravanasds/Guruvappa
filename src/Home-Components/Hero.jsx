import React, { useState, useEffect } from "react";
import HeroBg1 from "../assets/front.jpg";
import HeroBg2 from "../assets/candid3.jpg";
import HeroBg3 from "../assets/candid2.jpg";
import MobileBg1 from "../assets/gate-cut.jpg";
import MobileBg2 from "../assets/candid3-cut.jpg";
import MobileBg3 from "../assets/candid2-cut.jpg";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
    // Define images for desktop and mobile
    const desktopImages = [HeroBg1, HeroBg2, HeroBg3];
    const mobileImages = [MobileBg1, MobileBg2, MobileBg3];

    const [bgImages, setBgImages] = useState(desktopImages); // Default to desktop images
    const [currentIndex, setCurrentIndex] = useState(0);

    // Detect screen size and update images
    useEffect(() => {
        const updateImages = () => {
            if (window.innerWidth <= 650) {
                setBgImages(mobileImages); // Use mobile images for screens <= 768px
            } else {
                setBgImages(desktopImages); // Use desktop images for larger screens
            }
        };

        updateImages(); // Initial check
        window.addEventListener("resize", updateImages); // Listen for screen size changes
        return () => window.removeEventListener("resize", updateImages);
    }, [desktopImages, mobileImages]);

    // Automatically change slides every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [bgImages]);

    // Manual navigation handlers
    const goToNextSlide = () => setCurrentIndex((currentIndex + 1) % bgImages.length);
    const goToPrevSlide = () => setCurrentIndex((currentIndex - 1 + bgImages.length) % bgImages.length);

    return (
        <div className="relative w-full min-h-[70vh] md:min-h-[90vh]" id="home">
            {/* Background image */}
            <div
                className="absolute inset-0 w-full min-h-[70vh] md:min-h-[90vh] bg-cover bg-center transition-all duration-1000 ease-in-out"
                style={{ backgroundImage: `url(${bgImages[currentIndex]})` }}
            ></div>

            {/* Overlay for content */}
            <div className="absolute inset-0 flex items-center justify-start bg-black bg-opacity-50 sm:bg-opacity-20 md:px-8 lg:px-20 gap-6 sm:-mt-[100px]">
                <div className="w-full h-full flex flex-col justify-center items-center sm:justify-center sm:items-start sm:w-[70%] px-4 sm:px-10 text-center sm:text-left  ">
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-white font-bold sm:font-extrabold mb-4 tracking-wider leading-loose" style={{ lineHeight: '1.2', textShadow: "4px 4px 0px black" }}>
                        Welcome to our Guruvappa Higher Secondary School
                    </h1>
                    <p className="hidden md:block text-sm lg:text-xl text-white mb-4 leading-relaxed">
                        We're glad you're here. Discover amazing events and join our community!
                    </p>
                    <Link to={"/contact"}>
                        <button className="bg-secondary hover:bg-gradient-to-l text-white font-semibold py-2 sm:py-3 px-4 sm:px-8 rounded-xl transition duration-300">
                            <div className="flex items-center gap-3 text-base sm:text-xl text-primary">
                                <span>Contact Us</span>
                                <FaRegArrowAltCircleDown />
                            </div>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Navigation controls */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-20 cursor-pointer text-xl sm:text-4xl text-gray-400 sm:text-white" onClick={goToPrevSlide}>
                ❮
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-20 cursor-pointer text-xl sm:text-4xl text-gray-400 sm:text-white" onClick={goToNextSlide}>
                ❯
            </div>

            {/* Dots navigation */}
            <div className="absolute bottom-8 sm:bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {bgImages.map((_, index) => (
                    <span
                        key={index}
                        className={`w-6 h-1 sm:w-8 sm:h-1 ${index === currentIndex ? "bg-white" : "bg-gray-500"} cursor-pointer`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Hero;
