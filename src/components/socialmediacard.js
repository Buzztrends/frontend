import React from 'react'
import {  FaInstagram } from 'react-icons/fa';

const Socialmediacard = ({title,num,key}) => {

  return (
    <div className='rounded-lg border-2 border-border-color border-solid p-5 shadow-primary flex flex-col gap-4'>
      <div className='text-lg font-semibold tracking-tighter'>{title}</div>
      <div className='flex justify-between items-center text-sm font-semibold text-font-color'>
        <div className='flex items-center gap-1'>
            <span>Trending on</span>
            <FaInstagram />
        </div>
        <div className='flex items-center'>
       No. of posts: {num}
        </div>

      </div>
    </div>
  )
}

export default Socialmediacard
