import React from 'react'
import img1 from "../assets/myshool-t.jpg"
import img2 from "../assets/myshool-e.jpg"
import gate from "../assets/gate.jpg"
import arch from "../assets/arch.jpg"
import way from "../assets/way-cut.jpg"
import sideView from "../assets/sideview-cut.jpg"
import Cparking from "../assets/c-parking.jpg"
import Bparking from "../assets/b-parking.jpg"
import leftSideView from "../assets/leftsideview.jpg"
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
import { TiArrowForwardOutline } from "react-icons/ti";
import { RiArrowDownDoubleLine } from "react-icons/ri";

const Welcome = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center '>

            {/* <div className='w-[90%] mx-auto flex bg-secondary my-10 py-10 rounded-md'>
                <div className='w-[50%] flex justify-center items-center '>
                    <img src={img1} alt="" className='w-[70%] object-cover rounded-lg' />
                </div>

                <div className='w-[50%] flex justify-center items-center'>
                    <img src={img2} alt="" className='w-[70%] object-cover rounded-lg' />
                </div>
            </div> */}

            {/* <div>
                <img src={gate} alt="" />
            </div> */}

            <div className='w-full grid grid-cols-2 p-10 gap-1'>
                <img src={arch} alt="" className='row-span-2 w-full h-full object-cover' />
                <img src={way} alt="" />
                <img src={gate} alt="" />
                <img src={Cparking} alt="" />
                <img src={sideView} alt="" className='row-span-2 w-full h-full object-cover' />
                <img src={Bparking} alt="" />
            </div>

            <div className='relative'>
                <img src={stage} alt="" />
                <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent">
                    <h2 className='absolute bottom-4 left-12 text-white text-4xl font-semibold tracking-wider mb-4 flex items-center justify-center gap-3 '>
                        <TiArrowForwardOutline className='mt-2' /> Inner View of Campus <RiArrowDownDoubleLine className='mt-2' />
                    </h2>
                </div>
            </div>

            <div className='w-full grid grid-cols-2 p-10 gap-1'>
                <img src={infra1} alt="" className='row-span-2 w-full h-full object-cover' />
                <img src={infra2} alt="" />
                <img src={infra3} alt="" />
                {/* <img src={Cparking} alt="" />
                <img src={sideView} alt="" className='row-span-2 w-full h-full object-cover' />
                <img src={leftSideView} alt="" /> */}
            </div>

            <div className='relative'>
                <img src={teacher} alt="" />
                <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent">
                    <h2 className='absolute bottom-4 left-12 text-white text-4xl font-semibold tracking-wider mb-4 flex items-center justify-center gap-3 '>
                        <TiArrowForwardOutline className='mt-2' /> Class Rooms <RiArrowDownDoubleLine className='mt-2' />
                    </h2>
                </div>
            </div>

            <div className='w-full grid grid-cols-2 p-10 gap-1'>
                <img src={students} alt="" className='w-full h-full object-cover' />
                <img src={pillar} alt="" className='row-span-2 w-full h-full object-cover' />
                <img src={teacherS} alt="" className='w-full h-full object-cover' />
            </div>

            <div className='relative'>
                <img src={groundFull} alt="" />
                <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent">
                    <h2 className='absolute bottom-4 left-12 text-white text-4xl font-semibold tracking-wider mb-4 flex items-center justify-center gap-3 '>
                        <TiArrowForwardOutline className='mt-2' /> Boys Play Ground <RiArrowDownDoubleLine className='mt-2' />
                    </h2>
                </div>
            </div>

            <div className='w-full grid grid-cols-2 p-10 gap-1'>
                <img src={rope} alt="" className='row-span-2 w-full h-full object-cover' />
                <img src={ground} alt="" className=' w-full h-full object-cover' />
                <img src={boysGround} alt="" className=' w-full h-full object-cover' />
            </div>

            <div className='relative'>
                <img src={girlsGround} alt="" />
                <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent">
                    <h2 className='absolute bottom-4 left-12 text-white text-4xl font-semibold tracking-wider mb-4 flex items-center justify-center gap-3 '>
                        <TiArrowForwardOutline className='mt-2' /> Girls Play Ground <RiArrowDownDoubleLine className='mt-2' />
                    </h2>
                </div>
            </div>

            <div className='w-full grid grid-cols-2 p-10 gap-1'>
                <img src={basekatball} alt="" />
                <img src={vollyball} alt="" className='row-span-2 w-full h-full object-cover' />
                <img src={girlsGround} alt="" />
            </div>

            <div className='relative'>
                <img src={auditorium} alt="" />
                <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent">
                    <h2 className='absolute bottom-4 left-12 text-white text-4xl font-semibold tracking-wider mb-4 flex items-center justify-center gap-3 '>
                        <TiArrowForwardOutline className='mt-2' /> Auditorium 
                    </h2>
                </div>
            </div>

            <div className='w-full grid grid-cols-2 p-10 gap-1'>
                <div className='relative row-span-2'>
                    <img src={library1} alt="" />
                    <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent">
                        <h2 className='absolute bottom-4 left-12 text-white text-4xl font-semibold tracking-wider mb-4 flex items-center justify-center gap-3 '>
                            <TiArrowForwardOutline className='mt-2' /> Library 
                        </h2>
                    </div>
                </div>
                <img src={library2} alt="" className='w-full h-full object-cover' />
                <img src={library3} alt="" className='w-full h-full object-cover' />
            </div>

            <div className='relative'>
                <img src={computer} alt="" />
                <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent">
                    <h2 className='absolute bottom-4 left-12 text-white text-4xl font-semibold tracking-wider mb-4 flex items-center justify-center gap-3 '>
                        <TiArrowForwardOutline className='mt-2' /> Computer Lab <RiArrowDownDoubleLine className='mt-2' />
                    </h2>
                </div>
            </div>

            <div className='w-full grid grid-cols-2 p-10 gap-1'>
                <img src={computerlab1} alt="" />
                <img src={computerlab2} alt="" className='row-span-2 w-full h-full object-cover' />
                <img src={computerlab3} alt="" />
            </div>

            <div className='relative'>
                <img src={hostel} alt="" />
                <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent">
                    <h2 className='absolute bottom-4 left-12 text-white text-4xl font-semibold tracking-wider mb-4 flex items-center justify-center gap-3 '>
                        <TiArrowForwardOutline className='mt-2' /> Hostel 
                    </h2>
                </div>
            </div>

            <div className='w-full grid grid-cols-2 p-10 gap-1'>
                <img src={computerlab1} alt="" />
                <img src={computerlab2} alt="" className='row-span-2 w-full h-full object-cover' />
                <img src={computerlab3} alt="" />
            </div>
        </div>
    )
}

export default Welcome