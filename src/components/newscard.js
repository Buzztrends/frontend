import React from 'react'
import Image from 'next/image';
import {LiaGreaterThanSolid,LiaSave} from 'react-icons/lia';

const Newscard = ({data,toggleModal}) => {

//   console.log(data);
  return (
    <div className='flex flex-col w-[30%] border border-gray-100 shadow-sidd' >
        
        {data.top_image && <img alt="" className='h-44 object-cover' src={data.top_image}  />}
        <div className='flex flex-col gap-3 p-3 font-poppins'>
        <div className='flex flex-col '>
            <div className=' text-base font-medium leading-7 tracking-wide'>
             {data.title && data.title.length > 50
    ? `${data.title.slice(0, 50)}...` : data.title} {data.event_name && data.event_name.length > 50
    ? `${data.event_name.slice(0, 50)}...` : data.event_name}</div>
            <div className='text-xs font-normal leading-5 tracking-wide'>{data.source} </div>
        </div>
        <div className='text-s font-normal leading-5 tracking-wide'> {data.description && data.description.length > 50
    ? `${data.description.slice(0, 50)}...`
    : data.description}</div>
        <div className='flex justify-between text-xs font-normal leading-5 tracking-wide'>
            <button className='flex gap-1 items-center text-font-color'>
                <LiaSave />
                <span>SAVE</span>
            </button>
            <button className='flex gap-1 items-center text-font-color' onClick={()=>{toggleModal({data: data })}}>
                <span>MORE</span>
                <LiaGreaterThanSolid />
            </button>
        </div>
    </div>
    </div>
  )
}

export default Newscard
