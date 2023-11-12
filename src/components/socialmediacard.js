import React from 'react'
import {  FaInstagram } from 'react-icons/fa';
import {LiaGreaterThanSolid} from 'react-icons/lia';

const Socialmediacard = ({title,hashtags,key,selected,setSelected,position}) => {
  // console.log("card called");
  return (
    <button className='rounded-lg border-2 border-border-color border-solid p-5 shadow-primary flex flex-col gap-4 relative' onClick={()=>setSelected(position)}>
      <div className='text-lg font-semibold tracking-tighter'>{title}</div>
      <div className='flex justify-between items-center text-sm font-semibold text-font-color'>
        <div className='flex items-center gap-1'>
            <span>Trending on</span>
            <FaInstagram />
        </div>
        <div className='flex items-center'>
       No. of posts: 4
        </div>

      </div>
      <div className='absolute top-1/2 right-2'>{selected===position?<LiaGreaterThanSolid color='font-color'/>:""}</div>
    </button>
  )
}

export default Socialmediacard
