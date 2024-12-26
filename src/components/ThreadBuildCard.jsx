import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'

const ThreadBuildCard = () => {
  return (
    <>
    <div className="rounded-xl bg-white shadow-xl hover:shadow-xl transition-shadow  w-[45%]">
           <div className='bg-neutral-900  rounded-t-xl flex flex-between items-center justify-between'>
              <h3 className="text-xl text-white text-center p-3 font-semibold mb-2">Thread Build</h3>
              <FaInfoCircle className='m-3 cursor-pointer' size={34} color='white' />
           </div>
           <p className="text-gray-600 px-4 mt-6 mb-6 ">
             <span className='text-black font-semibold'>Description:</span> Watch the video and threadbuild, and jot out key threads while watching the video
           </p>
      <h4 className="mt-4 p-6 font-semibold">Thread A</h4>
      <div className="flex space-x-4 mb-4 m-6">
        <input
          type="text"
          placeholder="Enter Text here"
          className="border border-gray-300 rounded-md p-2 w-1/2"
        />
        <input
          type="text"
          placeholder="Enter Text here"
          className="border border-gray-300 rounded-md p-2 w-1/2"
        />
      </div>
      <div className="flex space-x-2 mb-4 ">
        <i className="fa fa-lightbulb-o text-blue-500"></i>
        <i className="fa fa-edit text-green-500"></i>
        <i className="fa fa-comment text-yellow-500"></i>
        <i className="fa fa-twitter text-blue-400"></i>
      </div>
      <div className="flex space-x-4 mb-4 p-6">
        <select className="border border-gray-300 rounded-md p-2">
          <option value="">Select Category</option>
          {/* Add more options here */}
        </select>
        <select className="border border-gray-300 rounded-md p-2">
          <option value="">Select Process</option>
          {/* Add more options here */}
        </select>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 ml-6">
        + Sub-thread
      </button>
      <p className="text-gray-500 px-6">Summary for Thread A</p>
      <textarea
        className="border border-gray-300 rounded-md p-2 w-[94%] h-24 m-4"
        placeholder="Enter Text Here"
      ></textarea>
    </div>
    </>
  )
}

export default ThreadBuildCard
