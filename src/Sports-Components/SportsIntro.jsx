import React from "react";

const SportsIntro = () => {
    return (
        <div className="w-full min-h-screen bg-gray-100 text-justify">
            {/* Header Section */}
            <header className="bg-secondary text-primary py-6">
                {/* <h1 className="text-center text-4xl font-bold">Sports Achievements</h1> */}
                <p className="w-[95%] mx-auto px-6 text-lg sm:text-2xl tracking-wider">
                    Welcome to our School of Sporting Excellence, where our school's rich
                    tradition of athletic prowess comes to life.
                </p>
            </header>

            {/* Content Section */}
            <section className="w-[95%] mx-auto p-4 sm:p-6 sm:pb-16 space-y-8 text-base sm:text-xl">
                {/* Legacy Section */}
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                        Our Legacy in Sports Excellence
                    </h2>
                    <p className="text-gray-700">
                        Recognized as a beacon of excellence, our school has been leading
                        the way in athletics for over two decades. With a legacy spanning{" "}
                        <span className="font-bold">24 consecutive years</span>, we take
                        pride in producing athletes who compete at the highest levels.
                    </p>
                </div>

                {/* Kabaddi Achievements */}
                <div className="space-y-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-secondary">
                        Kabaddi Achievements
                    </h2>
                    <div className="space-y-2">
                        <p className="text-gray-700">
                            Our school team has exclusively represented the{" "}
                            <span className="font-bold">Dindigul district</span> in the
                            prestigious Kabaddi State Tournament.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-gray-800">State Champions</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>2014-2015</li>
                            <li>2015-2016</li>
                            <li>2017-2018</li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-gray-800">State Runner-Up</h3>
                        <p className="text-gray-700">
                            Achieved <span className="font-bold">2nd place</span> in the{" "}
                            <span className="font-bold">14-year-old Kabaddi State Tournament</span> in
                            <span className="font-bold"> 2022-2023</span>.
                        </p>
                    </div>
                </div>

                {/* Boxing Achievements */}
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-secondary">Boxing Triumphs</h2>
                    <p className="text-gray-700 mt-2">
                        Our school added another feather to its cap by winning the{" "}
                        <span className="font-bold">State Level Boxing Competition</span>,
                        showcasing incredible strength and skill in the ring.
                    </p>
                </div>

                {/* Swimming Achievements */}
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-secondary">Swimming Glory</h2>
                    <p className="text-gray-700 mt-2">
                        Crowned as the <span className="font-bold">Best School in Swimming</span> at
                        the regional level, our swimmers have consistently outperformed
                        their peers with exceptional technique and discipline.
                    </p>
                </div>

                {/* Kho-Kho Achievements */}
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-secondary">Kho-Kho Success</h2>
                    <p className="text-gray-700 mt-2">
                        Qualified for the{" "}
                        <span className="font-bold">State Tournament in Women's Kho-Kho</span> in{" "}
                        <span className="font-bold">2019-2020</span>, marking yet another
                        milestone in our sports journey.
                    </p>
                </div>

                
            </section>
        </div>
    );
};

export default SportsIntro;
