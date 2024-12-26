import React from 'react';

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center w-full  ">
    <div className='flex justify-between w-full m-2 p-3'>
        <div className='text-3xl text-blue-600 font-bold'>Technical Project Management</div>
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Submit Task</button>
    </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-4">
            1
          </div>
          <h2 className="text-xl font-semibold">Explore the world of management</h2>
        </div>
        <p className="text-gray-700">
          As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?
        </p>
      </div>
    </div>
  );
}

export default Hero;