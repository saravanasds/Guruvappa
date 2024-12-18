import React, { useState, useEffect } from "react";
import HeroBg1 from "../assets/front.jpg";
import HeroBg2 from "../assets/candid3.jpg";
import HeroBg3 from "../assets/candid2.jpg";
import { FaRegArrowAltCircleDown } from "react-icons/fa";


const Hero = () => {
    const bgImages = [HeroBg1, HeroBg2, HeroBg3 ];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically change slides every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [bgImages.length]);

    // Manually handle slide changes
    const goToNextSlide = () => setCurrentIndex((currentIndex + 1) % bgImages.length);
    const goToPrevSlide = () => setCurrentIndex((currentIndex - 1 + bgImages.length) % bgImages.length);

    return (
        <div className="relative w-full min-h-[90vh]" id="home">
            {/* Background image */}
            <div
                className="absolute inset-0 w-full min-h-[90vh] bg-cover bg-center transition-all duration-1000 ease-in-out"
                style={{ backgroundImage: `url(${bgImages[currentIndex]})` }}
            ></div>

            {/* Overlay for content */}
            <div className="absolute inset-0 flex items-center justify-start bg-black bg-opacity-20  md:px-8 lg:px-20 gap-6 -mt-[100px]">
                <div className="w-full sm:w-[70%] px-10 text-center sm:text-left ">
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-white font-bold sm:font-extrabold mb-4 tracking-wider leading-loose" style={{ lineHeight: '1.2', textShadow: "4px 4px 0px black" }}>
                        Welcome to our Guruvappa Higher Secondary School
                    </h1>
                    <p className="text-sm lg:text-xl text-white mb-4 leading-relaxed">
                        We're glad you're here. Discover amazing events and join our community!
                    </p>
                    <button className="bg-secondary hover:bg-gradient-to-l text-white font-semibold py-2 sm:py-3 px-4 sm:px-8 rounded-xl transition duration-300">
                        <div className="flex items-center gap-3 text-base sm:text-xl text-primary">
                            <span>Contact Us</span>
                            <FaRegArrowAltCircleDown />
                        </div>
                    </button>
                </div>

                {/* <div className="w-[40%] mx-auto p-8">
                    <img src={logo} alt="" />
                </div> */}
            </div>

            {/* Navigation controls */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-20 cursor-pointer text-2xl sm:text-4xl text-white" onClick={goToPrevSlide}>
                ❮
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-20 cursor-pointer text-2xl sm:text-4xl text-white" onClick={goToNextSlide}>
                ❯
            </div>

            {/* Dots navigation */}
            <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
