import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'

const StructureCard = () => {
  return (
    <>
    <div className="rounded-xl bg-white shadow-xl hover:shadow-xl transition-shadow  w-[45%]">
                <div className='bg-neutral-900  rounded-t-xl flex flex-between items-center justify-between'>
                    <h3 className="text-xl text-white text-center p-3 font-semibold mb-2">Structure your Pointers</h3>
                    <FaInfoCircle className='m-3 cursor-pointer' size={34} color='white' />
                 </div>
                 <p className="text-gray-600 px-4 mt-6 mb-6 ">
                   <span className='text-black font-semibold'>Description:</span> Write a 300-400 word article from your thread. Publish your understanding and showcase your understanding to the entire world
                 </p>
      <div className="mt-4 px-6">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2 ">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="mt-4 px-6 mb-6">
        <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
          Content
        </label>
      
        <div className="border border-gray-300 rounded-md p-2 h-40">
         
        </div>
      </div>
    </div>
    </>
  )
}

export default StructureCard
