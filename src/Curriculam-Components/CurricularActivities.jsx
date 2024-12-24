import React from 'react'
import textile from "../assets/textile.jpg"
import scouts from "../assets/scouts.jpg"
import jrc from "../assets/jrc.jpg"
import horseride from "../assets/horse1.jpg"
import horseHero from "../assets/horse-hero.jpg"
import shooting from "../assets/shooting.jpg"
import award from "../assets/award.jpg"
import music from "../assets/music.jpg"
import dancing from "../assets/dancing.jpg"
import drawing from "../assets/drawing.jpg"
import { TiArrowForwardOutline } from "react-icons/ti";
import { RiArrowDownDoubleLine } from "react-icons/ri";

const CurricularActivities = () => {
    return (
        <div className='w-full min-h-screen'>
            <div className='relative w-full min-h-[40vh] sm:min-h-[60vh] flex justify-start items-end'>
                <div className='absolute inset-0 w-full' style={{ backgroundImage: `url(${horseHero})`, backgroundSize: "cover", backgroundPosition: "top" }}></div>
                <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <div className='relative my-4 sm:my-6 mx-4 sm:mx-20'>
                    <h2 className='text-white text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider flex gap-3' style={{ textShadow: "4px 4px 0px black" }}><TiArrowForwardOutline className='mt-2' />Extra-Curriculur Activities <RiArrowDownDoubleLine className='mt-2' /></h2>
                </div>
            </div>
            <div className='w-[90%] mx-auto flex flex-col justify-center items-center sm:my-20 text-justify'>

                <div className='w-full min-h-[50vh] flex flex-col md:flex-row justify-center items-center'>

                    <div className='w-full md:w-[50%] flex justify-center items-center py-6'>
                        <div className='w-full sm:w-[80%] mx-auto flex flex-col'>
                            <h3 className='text-xl sm:text-3xl font-bold text-secondary tracking-wider mb-3 sm:mb-6text-left '>National Cadet Corps (NCC)</h3>
                            <p className='text-base sm:text-lg text-black tracking-wider '>
                                The school has been running a National Student Corps (NCC) program since 2010, with students participating in camps and receiving shooting training.
                            </p>
                        </div>
                    </div>

                    <div className='w-full md:w-[50%] h-[50vh]'>
                        <img src={shooting} alt="" className='w-full h-[50vh] object-cover' />
                    </div>

                </div>

                <div className='w-full min-h-[50vh] flex flex-col-reverse md:flex-row justify-center items-center'>

                    <div className='w-full md:w-[50%] h-[50vh]'>
                        <img src={award} alt="" className='w-full h-[50vh] object-cover' />
                    </div>

                    <div className='w-full md:w-[50%] flex justify-center items-center py-6'>
                        <div className='w-full sm:w-[80%] mx-auto flex flex-col gap-2 text-base sm:text-lg'>
                            <div className=''><strong>Troop No: </strong>378</div>
                            <div className=''><strong>Unit: </strong>TN(14) BN NCC, Dindigul</div>
                            <div className=''><strong>Group: </strong>Trichy</div>
                            <div className=''><strong>Directorate: </strong>Chennai</div>
                            <div className=''><strong>From: </strong>2009 - 2010</div>
                            <div className=''><strong>Incharge: </strong>F/O. P.Palanichamy</div>
                            <div className=''><strong>Total Strength: </strong>100</div>
                        </div>
                    </div>

                </div>

                <div className='w-full min-h-[50vh] flex flex-col md:flex-row justify-center items-center'>

                    <div className='w-full md:w-[50%] flex justify-center items-center py-6'>
                        <div className='w-full sm:w-[80%] mx-auto flex flex-col'>
                            <h3 className='text-xl sm:text-3xl font-bold text-secondary tracking-wider mb-3 sm:mb-6 text-left'>Service Commitment Opportunity Unity Team (SCOUT)</h3>
                            <p className='text-base sm:text-lg text-black tracking-wider '>
                                Unity Team's service commitment opportunity is a team activity that involves volunteering. Volunteering can help strengthen the unity of a team. Some examples of places to volunteer include: food banks, hospitals, shelters, neighborhood gardens, and clean up.
                            </p>
                        </div>
                    </div>

                    <div className='w-full md:w-[50%] h-[50vh]'>
                        <img src={scouts} alt="" className='w-full h-[50vh] object-cover' />
                    </div>

                </div>

                <div className='w-full min-h-[50vh] flex flex-col-reverse md:flex-row justify-center items-center'>

                    <div className='w-full md:w-[50%] h-[50vh]'>
                        <img src={jrc} alt="" className='w-full h-[50vh] object-cover' />
                    </div>

                    <div className='w-full md:w-[50%] flex justify-center items-center py-6'>
                        <div className='w-full sm:w-[80%] mx-auto flex flex-col'>
                            <h3 className='text-xl sm:text-3xl font-bold text-secondary tracking-wider mb-3 sm:mb-6 text-left'>Junior Red Cross(JRC)</h3>
                            <p className='text-base sm:text-lg text-black tracking-wider '>
                                The Junior Red Cross (JRC) is a group activity for school students that aims to teach Red Cross values and principles, and to develop a spirit of service and helpfulness among students. JRC activities include training, camps, and other programs that help students develop self-confidence and learn to "notice, think, and act".
                            </p>
                        </div>
                    </div>

                </div>

                <div className='w-full min-h-[50vh] flex flex-col md:flex-row justify-center items-center'>

                    <div className='w-full md:w-[50%] flex justify-center items-center py-6 '>
                        <div className='w-full sm:w-[80%] mx-auto flex flex-col'>
                            <h3 className='text-xl sm:text-3xl font-bold text-secondary tracking-wider mb-3 sm:mb-6 text-left'>Horse Riding</h3>
                            <p className='text-base sm:text-lg text-black tracking-wider'>
                                Horse riding can help students improve their balance, coordination, strength, flexibility, and cardiovascular fitness. Horse riding can help students develop mental toughness and a clear mind. earning to ride a horse can help students develop confidence and self-esteem.
                            </p>
                        </div>
                    </div>

                    <div className='w-full md:w-[50%] h-[50vh]'>
                        <img src={horseride} alt="" className='w-full h-[50vh] object-cover' />
                    </div>

                </div>

                <div className='w-full min-h-[50vh] flex flex-col-reverse md:flex-row justify-center items-center'>

                    <div className='w-full md:w-[50%] h-[50vh]'>
                        <img src={textile} alt="" className='w-full h-[50vh] object-cover' />
                    </div>

                    <div className='w-full md:w-[50%] flex justify-center items-center py-6 '>
                        <div className='w-full sm:w-[80%] mx-auto flex flex-col'>
                            <h3 className='text-xl sm:text-3xl font-bold text-secondary tracking-wider mb-3 sm:mb-6 text-left'>Tailoring Courses</h3>
                            <p className='text-base sm:text-lg text-black tracking-wider'>
                                Shape Your Future in Fashion: In the vibrant world of fashion, the art of costume stitching is a highly sought-after skill. Whether you’re passionate about creating your own wardrobe or aspiring to pursue a career in the fashion industry, mastering the techniques of costume stitching can open doors to endless possibilities.
                            </p>
                        </div>
                    </div>

                </div>

                <div className='w-full min-h-[50vh] flex flex-col md:flex-row justify-center items-center'>

                    {/* Music Section */}
                    <div className='w-full md:w-[50%] flex justify-center items-center py-6  '>
                        <div className='w-full sm:w-[80%] mx-auto flex flex-col'>
                            <h3 className='text-xl sm:text-3xl font-bold text-secondary tracking-wider mb-3 sm:mb-6 text-left'>Music</h3>
                            <p className='text-base sm:text-lg text-black tracking-wider'>
                                Music is a universal language that fosters creativity, emotional expression, and cognitive development. At Guruvappa School, our music programs enable students to explore various instruments, vocal techniques, and music theory. Engaging in music enhances memory, discipline, and teamwork while instilling a lifelong appreciation for the arts.
                            </p>
                        </div>
                    </div>

                    <div className='w-full md:w-[50%] h-[50vh]'>
                        <img src={music} alt="Music Activity" className='w-full h-[50vh] object-cover' />
                    </div>
                </div>

                <div className='w-full min-h-[50vh] flex flex-col-reverse md:flex-row justify-center items-center'>

                    {/* Dancing Section */}
                    <div className='w-full md:w-[50%] h-[50vh]'>
                        <img src={dancing} alt="Dancing Activity" className='w-full h-[50vh] object-cover' />
                    </div>

                    <div className='w-full md:w-[50%] flex justify-center items-center py-6 '>
                        <div className='w-full sm:w-[80%] mx-auto flex flex-col'>
                            <h3 className='text-xl sm:text-3xl font-bold text-secondary tracking-wider mb-3 sm:mb-6 text-left'>Dancing</h3>
                            <p className='text-base sm:text-lg text-black tracking-wider'>
                                Dancing is more than movement—it’s an art form that cultivates rhythm, coordination, and cultural appreciation. Students at Guruvappa School can learn traditional and modern dance styles, boosting their physical fitness and self-confidence. Dancing also nurtures creativity and provides a joyful outlet for self-expression.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full min-h-[50vh] flex flex-col md:flex-row justify-center items-center'>

                    {/* Drawing Section */}
                    <div className='w-full md:w-[50%] flex justify-center items-center py-6 '>
                        <div className='w-full sm:w-[80%] mx-auto flex flex-col'>
                            <h3 className='text-xl sm:text-3xl font-bold text-secondary tracking-wider mb-3 sm:mb-6 text-left'>Drawing</h3>
                            <p className='text-base sm:text-lg text-black tracking-wider'>
                                Drawing is a gateway to unleashing imagination and developing fine motor skills. Through sketching, painting, and creative art activities, our students enhance their visual perception and storytelling abilities. Art at Guruvappa School is a celebration of individuality and a foundation for innovative thinking.
                            </p>
                        </div>
                    </div>

                    <div className='w-full md:w-[50%] h-[50vh] mb-4'>
                        <img src={drawing} alt="Drawing Activity" className='w-full h-[50vh] object-cover' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CurricularActivities