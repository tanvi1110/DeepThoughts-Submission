import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'

const TechnicalCard = () => {
  return (
   <>
    <div className="rounded-xl bg-white shadow-xl hover:shadow-xl transition-shadow  w-[45%]">
      <div className='bg-neutral-900  rounded-t-xl flex flex-between items-center justify-between'>
        <h3 className="text-xl text-white text-center p-3 font-semibold mb-2">Technical Project Management</h3>
        <FaInfoCircle className='m-3 cursor-pointer' size={34} color='white' />
      </div>
      <p className="text-gray-600 px-4 mt-6 mb-6 ">
        <span className='text-black font-semibold'>Description:</span> Story of Alignment Scope of Agility Specific Accountable Staggering Approach
      </p>
      <div className="mt-4">
        <video className="cursor-pointer w-full" src="your_video_url.mp4" controls />
      </div>
      <div className="flex justify-between mt-4 p-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Watch Later
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
          Share
        </button>
      </div>
    </div>
   </>
  )
}

export default TechnicalCard
