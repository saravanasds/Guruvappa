import React from 'react'
import gate from "../assets/gate.jpg"
import arch from "../assets/arch.jpg"
import way from "../assets/way-cut.jpg"
import sideView from "../assets/sideview-cut.jpg"
import Cparking from "../assets/c-parking.jpg"
import Bparking from "../assets/b-parking.jpg"
import stage from "../assets/stage.jpg"
import infra1 from "../assets/infra1.jpg"
import infra2 from "../assets/infra2.jpg"
import infra3 from "../assets/infra3.jpg"
import ground from "../assets/ground.jpg"
import groundFull from "../assets/ground-full.jpg"
import boysGround from "../assets/boys-ground.jpg"
import girlsGround from "../assets/girls-ground.jpg"
import vollyball from "../assets/vollyball.jpg"
import basekatball from "../assets/basekatball.jpg"
import rope from "../assets/rope.jpg"
import teacher from "../assets/teacher.jpg"
import teacherS from "../assets/teacher-s.jpg"
import students from "../assets/students.jpg"
import pillar from "../assets/pillar-o.jpg"
import auditorium from "../assets/auditorium.jpg"
import library1 from "../assets/library1.jpg"
import library2 from "../assets/library2.jpg"
import library3 from "../assets/library3.jpg"
import computer from "../assets/computer-cut.jpg"
import computerlab1 from "../assets/computerlab1.jpg"
import computerlab2 from "../assets/computerlab2.jpg"
import computerlab3 from "../assets/computerlab3.jpg"
import hostel from "../assets/hostel.jpg"
import skc from "../assets/skc.jpg"
import skc1 from "../assets/skc1.jpg"
import skc2 from "../assets/skc2.jpg"
import skc3 from "../assets/skc3.jpg"
import parking1 from "../assets/parking1.jpg"
import parking2 from "../assets/parking2.jpg"
import parking3 from "../assets/parking3.jpg"
import hospital from "../assets/hospital.jpg"
import hospital1 from "../assets/hospital1.jpg"
import hospital2 from "../assets/hospital2.jpg"
import hospital3 from "../assets/hospital3.jpg"
import { TiArrowForwardOutline } from "react-icons/ti";
import { RiArrowDownDoubleLine } from "react-icons/ri";

const Welcome = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center '>

            <div className='w-full grid grid-cols-2 p-2 sm:p-10 gap-1'>
                <img src={arch} alt="guruvappa school arch" className='row-span-2 w-full h-full object-cover' />
                <img src={way} alt="guruvappa school way" />
                <img src={gate} alt="guruvappa school gate" />
                <img src={Cparking} alt="guruvappa school car parking" />
                <img src={sideView} alt="guruvappa school side view" className='row-span-2 w-full h-full object-cover' />
                <img src={Bparking} alt="guruvappa school bike parking" />
            </div>

            <div className='relative'>
                <img src={stage} alt="guruvappa school stage" />
                <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent">
                    <h2 className='absolute -bottom-2 left-2 sm:-bottom-2 sm:left-2 text-white text-xl sm:text-2xl md:text-4xl font-semibold tracking-wider mb-4 flex items-center justify-center gap-3 '>
                        <TiArrowForwardOutline className='mt-2' /> Inner View of Campus <RiArrowDownDoubleLine className='mt-2' />
                    </h2>
                </div>
            </div>

            <div className='w-full grid grid-cols-2 p-2 sm:p-10 gap-1'>
                <img src={infra1} alt="guruvappa school infrastructure" className='row-span-2 w-full h-full object-cover' />
                <img src={infra2} alt="guruvappa school infrastructure" />
                <img src={infra3} alt="guruvappa school infrastructure" />
                {/* <img src={Cparking} alt="" />
                <img src={sideView} alt="" className='row-span-2 w-full h-full object-cover' />
                <img src={leftSideView} alt="" /> */}
            </div>

            <div className='relative'>
                <img src={teacher} alt="guruvappa school class room" />
                <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent">
                    <h2 className='absolute -bottom-2 left-2 sm:-bottom-2 sm:left-2 text-white text-xl sm:text-2xl md:text-4xl font-semibold tracking-wider mb-4 flex items-center justify-center gap-3 '>
                        <TiArrowForwardOutline className='mt-2' /> Class Rooms <RiArrowDownDoubleLine className='mt-2' />
                    </h2>
                </div>
            </div>

            <div className='w-full grid grid-cols-2 p-2 sm:p-10 gap-1'>
                <img src={students} alt="guruvappa school students" className='w-full h-full object-cover' />
                <img src={pillar} alt="guruvappa school piller" className='row-span-2 w-full h-full object-cover' />
                <img src={teacherS} alt="guruvappa school teacher" className='w-full h-full object-cover' />
            </div>

            <div className='relative'>
                <img src={groundFull} alt="guruvappa school boys ground" />
                <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent">
                    <h2 className='absolute -bottom-2 left-2 sm:-bottom-2 sm:left-2 text-white text-xl sm:text-2xl md:text-4xl font-semibold tracking-wider mb-4 flex items-center justify-center gap-3 '>
                        <TiArrowForwardOutline className='mt-2' /> Boys Play Ground <RiArrowDownDoubleLine className='mt-2' />
                    </h2>
                </div>
            </div>

            <div className='w-full grid grid-cols-2 p-2 sm:p-10 gap-1'>
                <img src={rope} alt="guruvappa school rope" className='row-span-2 w-full h-full object-cover' />
                <img src={ground} alt="guruvappa school ground" className=' w-full h-full object-cover' />
                <img src={boysGround} alt="guruvappa school boys ground" className=' w-full h-full object-cover' />
            </div>

            <div className='relative'>
                <img src={girlsGround} alt="guruvappa school girls ground" />
                <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent">
                    <h2 className='absolute -bottom-2 left-2 sm:-bottom-2 sm:left-2 text-white text-xl sm:text-2xl md:text-4xl font-semibold tracking-wider mb-4 flex items-center justify-center gap-3 '>
                        <TiArrowForwardOutline className='mt-2' /> Girls Play Ground <RiArrowDownDoubleLine className='mt-2' />
                    </h2>
                </div>
            </div>

            <div className='w-full grid grid-cols-2 p-2 sm:p-10 gap-1'>
                <img src={basekatball} alt="guruvappa school basketball" />
                <img src={vollyball} alt="guruvappa school vollyball" className='row-span-2 w-full h-full object-cover' />
                <img src={girlsGround} alt="guruvappa school girls ground" />
            </div>

            <div className='relative'>
                <img src={auditorium} alt="guruvappa school auditorium" />
                <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent">
                    <h2 className='absolute -bottom-2 left-2 sm:-bottom-2 sm:left-2 text-white text-xl sm:text-2xl md:text-4xl font-semibold tracking-wider mb-4 flex items-center justify-center gap-3 '>
                        <TiArrowForwardOutline className='mt-2' /> Auditorium
                    </h2>
                </div>
            </div>

            <div className='w-full grid grid-cols-2 p-2 sm:p-10 gap-1'>
                <div className='relative row-span-2'>
                    <img src={library1} alt="guruvappa school library" />
                    <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent">
                        <h2 className='absolute -bottom-2 left-2 sm:-bottom-2 sm:left-2 text-white text-xl sm:text-2xl md:text-4xl font-semibold tracking-wider mb-4 flex items-center justify-center gap-3 '>
                            <TiArrowForwardOutline className='mt-2' /> Library
                        </h2>
                    </div>
                </div>
                <img src={library2} alt="guruvappa school library" className='w-full h-full object-cover' />
                <img src={library3} alt="guruvappa school library" className='w-full h-full object-cover' />
            </div>

            <div className='relative'>
                <img src={computer} alt="guruvappa school computer lab" />
                <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent">
                    <h2 className='absolute -bottom-2 left-2 sm:-bottom-2 sm:left-2 text-white text-xl sm:text-2xl md:text-4xl font-semibold tracking-wider mb-4 flex items-center justify-center gap-3 '>
                        <TiArrowForwardOutline className='mt-2' /> Computer Lab <RiArrowDownDoubleLine className='mt-2' />
                    </h2>
                </div>
            </div>

            <div className='w-full grid grid-cols-2 p-2 sm:p-10 gap-1'>
                <img src={computerlab1} alt="guruvappa school laboratry" />
                <img src={computerlab2} alt="guruvappa school lab" className='row-span-2 w-full h-full object-cover' />
                <img src={computerlab3} alt="guruvappa school lab" />
            </div>

            <div className='relative'>
                <img src={hostel} alt="guruvappa school hostel" />
                <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent">
                    <h2 className='absolute -bottom-2 left-2 sm:-bottom-2 sm:left-2 text-white text-xl sm:text-2xl md:text-4xl font-semibold tracking-wider mb-4 flex items-center justify-center gap-3 '>
                        <TiArrowForwardOutline className='mt-2' /> Hostel
                    </h2>
                </div>
            </div>

            <div className='w-full grid grid-cols-2 p-2 sm:p-10 gap-1'>
            <div className='relative row-span-2'>
                    <img src={parking3} alt="guruvappa school school bus" />
                    <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent">
                        <h2 className='absolute -bottom-2 left-2 sm:-bottom-2 sm:left-2 text-white text-xl sm:text-2xl md:text-4xl font-semibold tracking-wider mb-4 flex items-center justify-center gap-3 '>
                            <TiArrowForwardOutline className='mt-2' /> Transport Facilities
                        </h2>
                    </div>
                </div>
                <img src={parking2} alt="guruvappa school transport" className='w-full h-full object-cover'/>
                <img src={parking1} alt="guruvappa school bus" className='w-full h-full object-cover'/>
            </div>

            <div className='relative'>
                <img src={skc} alt="SKC Elementary School" />
                <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent">
                    <h2 className='absolute -bottom-2 left-2 sm:-bottom-2 sm:left-2 text-white text-xl sm:text-2xl md:text-4xl font-semibold tracking-wider mb-4 flex items-center justify-center gap-3 '>
                        <TiArrowForwardOutline className='mt-2' /> SKC Elementary School <RiArrowDownDoubleLine className='mt-2' />
                    </h2>
                </div>
            </div>

            <div className='w-full grid grid-cols-2 p-2 sm:p-10 gap-1'>
                <img src={skc1} alt="SKC Elementary School" className='w-full h-full object-cover'/>
                <img src={skc3} alt="SKC Elementary School" className='row-span-2 w-full h-full object-cover' />
                <img src={skc2} alt="SKC Elementary School" className='w-full h-full object-cover'/>
            </div>

            <div className='relative'>
                <img src={hospital} alt="Meenakshisundharam Memorial Trust Hospital" />
                <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent">
                    <h2 className='absolute -bottom-2 left-2 sm:-bottom-2 sm:left-2 text-white text-xl sm:text-2xl md:text-4xl font-semibold tracking-wider mb-4 flex items-center justify-center gap-3 '>
                        <TiArrowForwardOutline className='mt-2' /> Meenakshisundharam Memorial Trust Hospital <RiArrowDownDoubleLine className='mt-2' />
                    </h2>
                </div>
            </div>

            <div className='w-full grid grid-cols-2 p-2 sm:p-10 gap-1'>
                <img src={hospital3} alt="Meenakshisundharam Memorial Trust Hospital" className='w-full h-full object-cover'/>
                <img src={hospital2} alt="Meenakshisundharam Memorial Trust Hospital" className='row-span-2 w-full h-full object-cover' />
                <img src={hospital1} alt="Meenakshisundharam Memorial Trust Hospital" className='w-full h-full object-cover'/>
            </div>
        </div>
    )
}

export default Welcome