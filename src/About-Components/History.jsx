import React from 'react'
import logo from "../assets/gh.png"

const History = () => {
    return (
        <div className='relative w-full min-h-[70vh] '>

            <div className='w-full min-h-[70vh] relative flex p-10 mt-16'>
                <div className=' w-[30%] flex flex-col justify-start items-center'>
                    <div className='flex items-center gap-3'>
                        <img src={logo} alt="" className='w-12 h-12' />
                        <h2 className='text-3xl font-normal text-secondary tracking-wider'>Guruvappa School</h2>
                    </div>
                    <p className='text-xl text-prime tracking-wider font-semibold italic'>About Our History</p>
                </div>
                <div className='w-[70%] flex flex-col justify-start items-start text-secondary text-2xl tracking-wide px-10'>
                    <p className='mb-8 text-secondary italic'>
                        GURUVAPPA HIGHER SECONDARY SCHOOL Neikkarapatti was established in 1960 and it is managed by the Pvt. Aided. It is located in Rural area. It is located in PALANI block of DINDIGUL district of Tamil Nadu.
                    </p>
                    <p className='font-normal mb-6 text-gray-600 text-lg'>
                        The school consists of Grades from 6 to 12. The school is Co-educational and it doesn't have an attached pre-primary section. The school is N/A in nature and is not using school building as a shift-school. Tamil is the medium of instructions in this school. This school is approachable by all weather road. In this school academic session starts in April. The school has Private building. It has got 13 classrooms for instructional purposes. All the classrooms are in good condition. It has 2 other rooms for non-teaching activities. The school has a separate room for Head master/Teacher. The school has Pucca boundary wall. The school has have electric connection. The source of Drinking Water in the school is Tap Water and it is functional. The school has 6 boys toilet and it is functional. and 8 girls toilet and it is functional. The school has a playground. The school has a library and has 5200 books in its library. The school does not need ramp for disabled children to access classrooms. The school has 35 computers for teaching and learning purposes and all are functional. The school is not having a computer aided learning lab. The school is Provided and Prepared in School Premises providing mid-day meal.
                    </p>
                    {/* <button className='text-xl flex items-center justify-center gap-3 px-6 py-2 border rounded-md hover:scale-[1.03] transform transition-all duration-500'>Read more <BsForwardFill className='mt-1' /></button> */}
                </div>
            </div>

        </div>
    )
}

export default History