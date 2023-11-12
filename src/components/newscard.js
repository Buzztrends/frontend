import React from 'react'
import {LiaGreaterThanSolid,LiaSave} from 'react-icons/lia';

const Newscard = (props) => {
  const data=props.data;
//   console.log(data);
  return (
    <div className='flex flex-col w-[30%] rounded-lg border border-solid border-font-color shadow-primary'>
        
        <img className='rounded-t-lg' src='/images/card.png'></img>
        <div className='flex flex-col gap-3 p-3 font-poppins'>
        <div className='flex flex-col '>
            <div className=' text-base font-medium leading-7 tracking-wide'>
            {data.title}{data.event_name}</div>
            <div className='text-xs font-normal leading-5 tracking-wide'>{data.source} </div>
        </div>
        <div className='text-s font-normal leading-5 tracking-wide'>{data.topic}</div>
        <div className='flex justify-between text-xs font-normal leading-5 tracking-wide'>
            <button className='flex gap-1 items-center text-font-color'>
                <LiaSave />
                <span>SAVE</span>
            </button>
            <button className='flex gap-1 items-center text-font-color'>
                <span>MORE</span>
                <LiaGreaterThanSolid />
            </button>
        </div>
    </div>
    </div>
  )
}

export default Newscard