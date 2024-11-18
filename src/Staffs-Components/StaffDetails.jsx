import React from 'react';

const StaffDetails = () => {

  const staffData = [
    {
      id: 1,
      photo: 'https://via.placeholder.com/150',
      name: 'Saravanan',
      role: 'Managing Director',
    },
    {
      id: 2,
      photo: 'https://via.placeholder.com/150',
      name: 'Naveen Kumar',
      role: 'Developer',
    },
    {
      id: 3,
      photo: 'https://via.placeholder.com/150',
      name: 'Karthikeyan',
      role: 'Developer',
    },
    {
      id: 4,
      photo: 'https://via.placeholder.com/150',
      name: 'Aananthi',
      role: 'Developer',
    },
    {
      id: 5,
      photo: 'https://via.placeholder.com/150',
      name: 'Dheepthi',
      role: 'Junior Developer',
    },
  ];

  return (
    <div className="w-full min-h-screen p-4 my-10">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {staffData.map((staff) => (
          <div
            key={staff.id}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={staff.photo}
              alt={staff.name}
              className="w-40 h-46 mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-center">{staff.name}</h3>
            <p className="text-center text-gray-500">{staff.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffDetails;
