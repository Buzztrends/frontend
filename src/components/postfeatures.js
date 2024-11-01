import React from 'react'
import { IoChevronUp } from 'react-icons/io5';
import { FaArrowDown } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Postfeatures = () => {
  return (
    <div className='p-5 flex flex-col gap-8 justify-end items-center'>
      <div className='self-center font-roboto text-4xl font-medium leading-10 p-auto'>
      
        Your Post Will Look 
         Like This 
      </div>
      <button className='w-1/3 h-20 rounded-lg border-2 border-gray-400 bg-gradient-linear text-white p-2 text-xl self-center'>Publish</button>
      <div className='grid grid-cols-2 gap-x-10 gap-y-5'>
        <button className='col-span-1 h-[49px] w-full rounded-[12px] border-2 border-purple flex items-center p-4 justify-between'>
            <span>Save</span>
            <IoChevronUp />
        </button>

        <button className='col-span-1 h-[49px] w-full rounded-[12px] border-2 border-purple flex items-center p-4 justify-between'>
            <span>Download</span>
            <FaArrowDown />
        </button>

        <button className=' bg-purple-100 flex flex-col gap-4 items-center justify-center col-span-1 h-[107px] w-full rounded-[12px] p-4 font-poppins text-base font-medium leading-5 tracking-tighter'>
           <span>Save as Draft</span>
           <span>Save to Campaigns</span>
        </button>

        <button className='col-span-1 h-[70px] w-full rounded-[12px] border-2 border-purple flex items-center p-4 justify-between'>
            <span>Send for<br></br> approval</span>
            <FaCheck />
        </button>

      </div>

        <div className='flex items-center justify-center gap-2 '>
            <span className='font-poppins text-base font-medium leading-7 tracking-tighter'>Share:</span>
            <FaInstagram size={25}/>
            <FaFacebook size={25} />
            <FaLinkedin size={25}/>
            <FaTwitter size={25}/>
        </div>

    </div>
  )
}

export default Postfeatures
