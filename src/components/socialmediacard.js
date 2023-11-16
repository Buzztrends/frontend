import React from 'react'
import {  FaInstagram } from 'react-icons/fa';
import {LiaGreaterThanSolid} from 'react-icons/lia';

const Socialmediacard = ({title,hashtags,trending,key,selected,setSelected,position}) => {
  // console.log("card called");
  return (
    <button className='rounded-lg border border-gray-200 shadow-sidd p-5 flex flex-col gap-4 relative' onClick={()=>setSelected(position)}>
      <div className='text-lg font-semibold tracking-tighter'>{title}</div>
      <div className='flex justify-between items-center text-sm font-semibold text-font-color'>
        <div className='flex items-center gap-1'>
            {trending}
        </div>
       

      </div>
      <div className='absolute top-1/2 right-2'>{selected===position?<LiaGreaterThanSolid color='font-color'/>:""}</div>
    </button>
  )
}

export default Socialmediacard
