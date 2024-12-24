import React from 'react';
import hospital from "../assets/hospital1-cut.jpg"
import skc from "../assets/skc.jpg"

const Legacy = () => {
    return (
        <div className="w-full min-h-screen p-4">
            <div className="w-full sm:w-[85%] mx-auto text-justify leading-relaxed">
                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-prime sm:mb-8 py-4">
                    History and Legacy of Guruvappa School
                </h1>

                {/* Founding and Establishment */}
                <section className="mb-4 py-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 border-b border-black pb-2 text-left">Founding and Establishment</h2>
                    <ul className="text-base sm:text-lg  text-gray-700 leading-relaxed list-disc ml-5 space-y-2">
                        <li>
                            Guruvappa Higher Secondary School was established on <strong>1st July 1960</strong> by
                            <strong> S.K. Chinnaswamy Nayakkar</strong> in memory of his father.
                        </li>
                        <li>
                            The foundation stone was laid by <strong> Karmaveerar Kamarasar</strong>, the Chief Minister at that time.
                        </li>
                        <li>
                            S.K. Chinnaswamy Nayakkar personally oversaw the building of a grand school structure and provided all
                            necessary facilities to ensure the growth of the institution.
                        </li>
                    </ul>
                </section>

                {/* Philanthropy and Contributions */}
                <section className="mb-8 ">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 border-b border-black pb-2 text-left">Philanthropy and Contributions</h2>
                    <p className="text-base sm:text-lg  text-gray-700 leading-relaxed">
                        <p className=''>
                            In addition to his work on the school, <strong>S.K. Chinnaswamy Nayakkar</strong> was a philanthropist.
                            He donated <strong>80 acres of land</strong> to the <strong>Bhumithana Movement</strong>, a social cause led by <strong>Vinobaji</strong>.
                        </p>
                        <br></br>
                        <p>
                            After his passing, his son <strong>C. Meenakshisundaram</strong> took over the administration and continued his father's philanthropic efforts:
                        </p>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Donated <strong>9.5 acres of land</strong> for the creation of the Papampatti Government Higher Secondary School.</li>
                        <li>Donated <strong>2 acres of land</strong> for the establishment of the Kudhiraiyar Panchayat Union Middle.School.</li>
                        <li>Provided <strong>5 acres of land</strong> to improve livelihoods in Kudhiraiyar hill community.</li>
                        <li><strong>50 Cents</strong> of land for the construction of a police station.</li>
                    </ul>
                </section>

                {/* Upgrades and Expansion */}
                <section className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 border-b border-black pb-2 text-left">Upgrades and Expansion</h2>
                    <ul className="text-base sm:text-lg  text-gray-700 leading-relaxed list-disc ml-5 space-y-2">
                        <li>
                            Guruvappa High School was upgraded to a higher seconday school in <strong>1988</strong>.
                        </li>
                        <li>
                            Currently, it accommodates over <strong> 2,100 students</strong>,
                        </li>
                        <li>
                            Offering English medium education from <strong>6th to 10th grade</strong>, which was introduced in <strong>2018</strong>.
                        </li>
                    </ul>
                </section>

                {/* Additional Educational Institutions */}
                <section className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 border-b border-black pb-2 text-left">Additional Educational schools</h2>
                    <ul className="text-base sm:text-lg  text-gray-700 leading-relaxed list-disc ml-5 space-y-2">
                        <li>
                            <strong>Crescent Matric School,</strong> founded in <strong>1994,</strong> was upgraded to <strong>Crescent Matric Higher Secondary School</strong> in <strong>2004,</strong> currently hosting more than <strong>750</strong> students.
                        </li>
                        <li>
                            <strong>S.K.C Memorial Kindergarten and Primary School,</strong> established in <strong>2002</strong>, offers education for children from <strong>LKG to 5th grade</strong>, currently serving around <strong>450</strong> students.
                        </li>
                        <img src={skc} alt="S.K.C Memorial Kindergarten and Primary School" />
                    </ul>
                </section>

                {/* Social Contributions */}
                <section className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4  border-b border-black pb-2 text-left">Social Contributions</h2>
                    <ul className="text-base sm:text-lg  text-gray-700 leading-relaxed list-disc ml-5 space-y-2">
                        <li>
                            <strong>Ivarmalai Child Welfare Temple,</strong> built by <strong>S.K. Chinnaswamy Nayakkar*</strong> near <strong>Pappampatti,</strong> continues to serve the community with charitable activities.
                        </li>

                        {/* <li>
                            His donations also include land for the upkeep of the temple and the provision of <strong>Noonbook Porridge</strong> during <strong>Ramadan</strong> for over <strong>40 years</strong>.
                        </li> */}
                        <li className='pt-2'>
                            <strong>S.K.C Meenakshi Sundaram Memorial Hospital</strong>, a 24-hour medical facility, provides healthcare services to <strong>Neikkarapatti</strong> and nearby areas.
                        </li>
                        <img src={hospital} alt="S.K.C Meenakshi Sundaram Memorial Hospital" />
                    </ul>
                </section>

                {/* Public Welfare and Extra-Curricular Activities */}
                <section className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4  border-b border-black pb-2 text-left">Public Welfare and Extra-Curricular Activities</h2>
                    <ul className="text-base sm:text-lg  text-gray-700 leading-relaxed list-disc ml-5 space-y-2">
                        <li>
                            The school has been running a <strong>National Cadet Corps (NCC)</strong> program since <strong>2010,</strong> with students participating in <strong>camps</strong> and receiving <strong>shooting training.</strong>
                        </li>
                        <li>
                            Since <strong>2023,</strong> <strong>horse riding</strong> has been introduced as an extracurricular activity for students.
                        </li>
                        <li>
                            Every year, the school organizes a <strong>free eye treatment camp</strong> in collaboration with <strong>Arvind Eye Hospital</strong> to promote health and wellness in the community.
                        </li>
                    </ul>
                </section>

                {/* Recent Developments */}
                <section className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4  border-b border-black pb-2 text-left">Recent Developments</h2>
                    <ul className="text-base sm:text-lg  text-gray-700 leading-relaxed list-disc ml-5 space-y-2">
                        <li>
                            In <strong>2020,</strong> a <strong>swimming pool</strong> was set up for student use.
                        </li>
                        <li>
                            Since <strong>2023,</strong> <strong>horse riding</strong> has been introduced as an extracurricular activity for students.
                        </li>
                        <li>
                            A <strong>hostel</strong> for students was inaugurated in <strong>2023</strong>, providing affordable accommodation for those from rural areas.
                        </li>
                    </ul>
                </section>


                {/* Conclusion */}
                <section className='mb-8'>
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 border-b border-black pb-2 text-left">Conclusion</h2>
                    <p className="text-base sm:text-lg  text-gray-700 leading-relaxed">
                        <strong>Guruvappa School</strong> has become a cornerstone of education and community development in the region. With a rich history of philanthropy, education, and social welfare, the school continues to grow under the guidance of <strong>S.K. Chinnaswamy Nayakkar’s</strong> successors. The contributions of the <strong>Meenakshisundaram</strong> family have left a lasting legacy, providing valuable educational opportunities, improving healthcare, and enhancing the overall well being of the local community.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Legacy;
