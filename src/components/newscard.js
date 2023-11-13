import React from 'react'
import Image from 'next/image';
import {LiaGreaterThanSolid,LiaSave} from 'react-icons/lia';

const Newscard = ({data,toggleModal}) => {
//   console.log(data);
  return (
    <div className='flex flex-col w-[30%] rounded-lg border border-black' onClick={()=>{toggleModal({data: data })}}>
        
        <Image className='rounded-t-lg' src={'/images/card.png'} width={350} height={100} />
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
