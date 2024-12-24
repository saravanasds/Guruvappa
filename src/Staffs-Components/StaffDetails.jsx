import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StaffDetails = () => {
  const [staffs, setStaffs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaffs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/getAllStaffs');
        console.log('Staffs:', response.data);
        setStaffs(response.data);
      } catch (error) {
        console.error('Error fetching staffs:', error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchStaffs();
  }, []);


  return (
    <div className="w-full min-h-screen p-2 xs:p-4 bg-secondary">

      <h2 className="w-full md:w-[90%] mx-auto text-xl sm:text-3xl md:text-4xl font-bold text-center text-gray-300 mb-2 sm:mb-4 uppercase border-b py-2 sm:py-4">Our Staff</h2>
      <div className='w-full md:w-[90%] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 xl:gap-8 py-6'>
        {staffs.map((staff) => (
          <div key={staff._id}
            className=" bg-white rounded-md overflow-hidden shadow-lg hover:scale-[1.02] transform transition-all duration-300 border p-0.5 sm:p-2 flex flex-col justify-between items-center"

          >
            <div className="relative w-full flex justify-center items-start border-gray-600 rounded-md">
              <img
                className=" w-full object-cover object-top sm:border border-black"
                src={staff.staffPhoto}
                alt={`Slide ${staff.staffName}`}
              />
              <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-60 py-1">
                <h2 className="text-xs xs:text-sm sm:text-xl font-semibold uppercase text-white">{staff.staffName}</h2>
                <h2 className="text-[10px] xs:text-sm font-semibold capitalize text-white sm:mb-1 tracking-wider">{staff.degree}</h2>
              </div>
            </div>

            <div className='relative p-1 sm:pt-2 w-full h-full text-center flex justify-center items-center'>
              <p className="text-[12px] xs:text-[14px] text-center tracking-wider uppercase font-bold text-gray-800">{staff.role}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default StaffDetails;
