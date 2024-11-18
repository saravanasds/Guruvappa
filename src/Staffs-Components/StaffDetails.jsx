import React from 'react';

const StaffDetails = () => {

  const staffData = [
    {
      id: 1,
      photo: 'https://via.placeholder.com/150',
      name: 'John Doe',
      role: 'Manager',
    },
    {
      id: 2,
      photo: 'https://via.placeholder.com/150',
      name: 'Jane Smith',
      role: 'Developer',
    },
    {
      id: 3,
      photo: 'https://via.placeholder.com/150',
      name: 'Michael Johnson',
      role: 'Designer',
    },
  ];

  return (
    <div className="w-full min-h-screen p-4">
      <h2 className="text-2xl font-semibold mb-4">Staff Details</h2>
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {staffData.map((staff) => (
          <div
            key={staff.id}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={staff.photo}
              alt={staff.name}
              className="w-32 h-32 mx-auto mb-4"
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
