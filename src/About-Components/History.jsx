import React from 'react'
import logo from "../assets/g-trans.png"
import skc from "../assets/skc.jpeg"
import ms from "../assets/ms.jpg"
import pms from "../assets/pd.jpg"
import correspond from "../assets/correspondent.jpeg"
import headMaster from "../assets/headmaster.jpg"

const History = () => {
    return (
        <div className='relative w-full min-h-screen'>

            <div className='w-full sm:w-[85%] mx-auto flex flex-col mt-10 '>

                <h2 className='text-sm xxs:text-lg sm:text-2xl md:text-3xl tracking-wider uppercase font-bold text-secondary pb-3 border-b-2 border-gray-300 px-4 sm:px-0 text-center sm:text-left'>
                    Our Founders Of Guruvappa Higher Secondary School
                </h2>

                <div className='w-full mx-auto flex justify-center items-center flex-wrap gap-4 lg:gap-20 mt-6 mb-10 bg-secondary py-8 text-white'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='border-4 border-gray-300 p-0.5'>
                            <img src={skc} alt="" className='w-[270px] h-[350px] object-cover border border-gray-300 p-2' />
                        </div>
                        <div className='flex flex-col text-center my-2'>
                            Honorable
                            <span className='font-bold tracking-wide'>S.K. CHINNACHAMY NAYAKKAR</span>
                        </div>
                    </div>

                    <div className=' flex flex-col justify-center items-center'>
                        <div className='border-4 border-gray-300 p-0.5'>
                            <img src={ms} alt="" className='w-[270px] h-[350px] object-cover border border-gray-300 p-2' />
                        </div>
                        <div className='flex flex-col text-center my-2'>
                            Honorable
                            <span className='font-bold tracking-wide'>C. MEENAKSHI SUNDHARAM</span>
                        </div>
                    </div>

                    <div className=' flex flex-col justify-center items-center'>
                        <div className='border-4 border-gray-300 p-0.5'>
                            <img src={pms} alt="" className='w-[270px] h-[350px] object-cover border border-gray-300 p-2' />
                        </div>
                        <div className='flex flex-col text-center my-2'>
                            Honorable
                            <span className='font-bold tracking-wide'>M. PADMAVATHI</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-full sm:w-[85%] px-4 sm:px-0 mx-auto border-b-2 border-gray-300 pb-10'>
                <p className='text-justify text-secondary italic text-lg sm:text-xl tracking-wide leading-relaxed mb-6'>
                    " Believing firmly that education is the greatest wealth and that teaching literacy to the underprivileged and performing charitable deeds are the highest forms of virtue, the late Honorable <span className='font-bold'>Guruvappa Nayakkar's</span> noble vision inspired the establishment of a quality educational institution in Neikkarapatti. His dream was to provide education to the children of Neikkarapatti and its surrounding areas, fostering in them morality, discipline, and knowledge of moral science."
                </p>
                <p className='text-base sm:text-lg text-justify leading-relaxed text-gray-600'>
                    With a steadfast commitment to fulfilling his father's aspirations, the Honorable <span className='font-bold italic text-black tracking-wide'>S.K. Chinnachamy Nayakkar</span> founded <span className=' font-semibold italic text-black'>Guruvappa High School</span> in his father's name. The foundation stone of this institution was laid on <span className='font-semibold text-black'>July 1, 1960,</span> by the then <span className='font-semibold italic text-black'>Chief Minister of Tamil Nadu, the esteemed <span className='font-semibold tracking-wide'>Karmaveerar Kamaraj</span></span>.

                    S.K. Chinnachami Nayakkar devoted his life and efforts to the progress of this school. He constructed a magnificent school building at great personal expense and ensured it was equipped with all the necessary facilities.

                    When <span className='font-semibold italic text-black'><span className='font-semibold tracking-wide'>Vinobaji,</span> the leader of the Bhoodan Movement</span>, visited his residence, S.K. Chinnachamy Nayakkar generously donated <span className='font-semibold text-black'>80 acres</span> of land to the movement as a benevolent gesture. This great philanthropist, who embodied such remarkable generosity, passed away on <span className='font-semibold text-black'>January 4, 1969,</span> leaving behind a legacy of compassion and service.

                    After the passing of the esteemed S.K. Chinnachami Nayakkar, his son, the honorable <span className='font-bold italic text-black tracking-wide'>C. Meenakshi Sundaram,</span> took over the administration and continued to uphold his father's vision and values. Additionally, he made a generous donation of <span className='font-semibold text-black'>9.5 acres</span> of land for the establishment of the <span className='font-semibold italic text-black'>Papampatti Government Higher Secondary School,</span> further contributing to the cause of education in the region.
                </p>
            </div>

            <div className='w-full md:w-[85%] mx-auto sm:my-10 flex flex-col xl:flex-row bg-slate-100'>

                <div className='w-full xl:w-[40%]'>
                    <div className='relative w-full sm:w-[50%] xl:w-full h-full mx-auto'>
                        <img src={correspond} alt="" className='h-full object-cover' />
                        <div className='absolute w-full bg-black bg-opacity-40 bottom-0 z-10 flex flex-col text-center py-2 text-white'>
                            <span className='font-semibold tracking-wider' style={{ textShadow: "1px 1px 0px black" }}>Correspondent</span>
                            <span className='font-bold tracking-wider text-2xl' style={{ textShadow: "2px 2px 0px black" }}>Mr. M.RAJKUMAR</span>
                        </div>
                    </div>
                </div>
                <div className='w-full xl:w-[60%]'>
                    <p className='font-normal mb-6 text-gray-600 text-base sm:text-lg text-justify px-4 xs:px-6 sm:px-10 pt-4 sm:py-8'>
                        Currently, <span className='font-bold text-black tracking-wide'>Mr. M.Rajkumar</span> serves as the esteemed secretary of the school and has been diligently managing its administration with remarkable success. Upholding the legacy of selfless service and generosity established by his forebears, Mr. Rajkumar has made significant contributions toward the betterment of the community and its educational landscape. In his unwavering commitment to societal development, he has generously donated <span className='font-semibold text-black'>2 acres</span> of land for the establishment of the <span className='font-semibold italic text-black'>Kudhiraiyar Panchayat Union Middle School,</span> ensuring access to quality education for the children in the region. <span className='font-semibold text-black'>5 acres</span> of land to support the livelihood of the <span className='font-semibold italic text-black'>Kudhiraiyar hill community,</span> providing them with opportunities for sustainable development and improved living standards. <span className='font-semibold text-black'>50 Cents</span> of land for the construction of a police station, contributing to the enhancement of law and order and the safety of the local community.
                        These contributions highlight his dedication to addressing the diverse needs of society, ranging from education and livelihood to public safety.

                        Building on this strong foundation of generosity and community service, Mr. Rajkumar has shifted his focus to further advancing educational facilities. His vision includes expanding the infrastructure of existing schools, equipping them with modern teaching resources, and integrating advanced technologies into the learning process. These initiatives aim to elevate the quality of education provided and empower students to achieve academic excellence while embracing the challenges of the modern world.

                        Through his efforts, Mr. M.Rajkumar has set a shining example of leadership and philanthropy, inspiring others in the region to contribute to the welfare and progress of society. With such a steadfast commitment to development and innovation, the future holds immense promise for the schools and communities he so passionately serves.
                    </p>

                </div>
            </div>

            <div className='w-full md:w-[85%] mx-auto min-h-[70vh] relative flex flex-col-reverse xl:flex-row sm:mt-10 border-t-2 border-gray-300 py-4 sm:py-10'>

                <div className='w-full xl:w-[65%] flex flex-col justify-start items-start text-secondary tracking-wide text-justify xl:pr-10 px-4 xs:px-6 sm:px-10'>
                    <p className='mb-4 sm:mb-8 text-secondary italic text-lg sm:text-xl lg:text-2xl mt-4 xl:mt-0'>
                        Guruvappa Higher Secondary School was established in 1960 and is managed as a private-aided (government-supported) school. It is situated in a rural area, specifically in Neikkarapatti, within the Palani block of the Dindigul district, Tamil Nadu.
                    </p>
                    <p className='font-normal sm:mb-6 text-gray-600 text-base sm:text-lg'>
                        The school was founded with a vision to provide quality education to the children of Neikkarapatti and surrounding villages, ensuring opportunities for academic excellence and personal development. Over the years, it has grown into a well-respected institution known for its dedicated teaching staff, strong emphasis on moral values, and student-centric approach.
                        Equipped with modern facilities and a conducive learning environment, Guruvappa Higher Secondary School continues to inspire and empower students, helping them excel in academics, sports, and extracurricular activities. The school takes pride in nurturing responsible and socially aware individuals who contribute positively to society.
                    </p>
                </div>

                <div className='w-full xl:w-[35%]  '>
                    <div className='relative w-full sm:w-[50%] xl:w-full h-full mx-auto'>
                        <img src={headMaster} alt="" className='h-full object-cover' />
                        <div className='absolute w-full bg-black bg-opacity-50 bottom-0 z-10 flex flex-col text-center py-2 text-white'>
                            <span className='font-semibold tracking-wider' style={{ textShadow: "1px 1px 0px black" }}>Head Mister</span>
                            <span className='font-bold tracking-wider text-2xl' style={{ textShadow: "2px 2px 0px black" }}>Ms. B.GEETHA</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default History