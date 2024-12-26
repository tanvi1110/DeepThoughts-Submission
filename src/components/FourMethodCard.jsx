import React, { useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa';

const FourMethodCard = () => {
  const [isIntroductionOpen, setIsIntroductionOpen] = useState(false);


  const [isOpen, setIsOpen] = useState(true);
  const [isOpen1, setIsOpen1] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClick1 = () => {
    setIsOpen1(!isOpen1);
  };


 

  return (
    <div className="rounded-xl bg-white shadow-xl hover:shadow-xl transition-shadow  w-[45%]">
                      <div className='bg-neutral-900  rounded-t-xl flex flex-between items-center justify-between'>
                          <h3 className="text-xl text-white text-center p-3 font-semibold mb-2">4SA Method</h3>
                          <FaInfoCircle className='m-3 cursor-pointer' size={34} color='white' />
                       </div>
                       <p className="text-gray-600 px-4 mt-6 mb-6 ">
                         <span className='text-black font-semibold'>Description:</span> To Explore more read more
                       </p>
      <div className="accordion">
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingOne">
            <button
              className={`accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-b border-gray-200 hover:bg-gray-100 ${
                isIntroductionOpen ? 'bg-gray-100' : ''
              }`}
              type="button"
              onClick={handleClick}
              aria-expanded={isIntroductionOpen}
              aria-controls="collapseOne"
            > 
             {isOpen ? <p className='font-semibold'>▲   Introduction</p> : <p>▼   Introduction</p>} 
            
            </button>
          </h2>
          {isOpen && 
          <div
            id="collapseOne"
           className='py-4'
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body px-5 flex justify-between">
              <p>The 4SA Method, How to bring a idea into progress?</p>
              <a href="#" className="text-blue-500 hover:underline">
                See More
              </a>
            </div>
          </div>
          }
        </div>
        <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingOne">
            <button
              className={`accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-b border-gray-200 hover:bg-gray-100 ${
                isIntroductionOpen ? 'bg-gray-100' : ''
              }`}
              type="button"
              onClick={handleClick1}
              aria-expanded={isIntroductionOpen}
              aria-controls="collapseOne"
            > 
             {isOpen ? <p className='font-semibold'>▲   Thread A</p> : <p>▼   Thread A</p>} 
            
            </button>
          </h2>
          {isOpen && 
          <div
            id="collapseOne"
           className='py-4'
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body px-5 flex justify-between">
              <p> How are you going to develop your strategy? Which method are you
                going to use to develop a strategy? What if the project is lengthy?
            </p>
              <a href="#" className="text-blue-500 hover:underline">
                See More
              </a>
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  );
}

export default FourMethodCard
