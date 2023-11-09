import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io';
import Instapostmodel from './instapostmodel';
import Postfeatures from './postfeatures';

const Instapost = () => {
  return (
    <div className='insta-post flex flex-col justify-center items-center w-3/5 h-3/4 rounded-[30px] p-5 shadow-primary border border-black'>
        <button className='self-end'><FaTimes size={20}/> </button>
        <div className='grid grid-cols-5 w-full gap-8'>


            <div className='insta col-span-2 flex flex-col gap-2'>
                <div className='flex justify-center items-center gap-2'>
                    <IoLogoInstagram size={25}/>
                    <span className='font-roboto text-xl font-semibold leading-6'>Instagram Post</span>
                </div>
                <Instapostmodel />
            </div>

             <div className='col-span-3'>
                <Postfeatures />
            </div>


        </div>
      
    </div>
  )
}

export default Instapost
