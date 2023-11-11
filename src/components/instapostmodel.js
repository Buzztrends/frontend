'use client';
import React, { useState } from 'react'
import { FaEllipsisH } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import {FaGreaterThan} from 'react-icons/fa6';
import { FaLessThan } from 'react-icons/fa6';

import { useContentContext } from "@/context/contentContext";


const Instapostmodel = () => {
    // const images=[];
    const { selectedImages } = useContentContext();

    const [num,setNum]=useState(0);
    console.log(selectedImages, 'insta')

    const handleImages=(val)=>{
        if(val=="inc"){
        setNum((num) => (num + 1) % selectedImages.length);
        }
        else{
            if(num==0){
                setNum(selectedImages.length-1);
            }
            else{
                setNum(num=>(num-1));
            }
        }
    }
  return (
    <div className='flex flex-col p-5 rounded-lg border border-black gap-2'>
      {/* {selectedImages} */}
      <div className=' flex items-center gap-3'>
        <img src='/images/insta-dp.png'></img>
        <span className='font-roboto text-sm font-medium leading-5'>model.susan</span>
        <FaEllipsisH className='ml-auto'/>
      </div>
      <div className='relative'>
    <img src={selectedImages[num]}></img>
    <div  className='absolute right-0 top-1/2 cursor-pointer' onClick={()=>handleImages("inc")}><FaGreaterThan  /></div>
    <div  className='absolute left-0 top-1/2 cursor-pointer' onClick={()=>handleImages("dec")}><FaLessThan  /></div>
    </div>
    <div className='icons flex gap-2'>
    <FaHeart />
    <FaComment />
    <FaShare />
    <FaBookmark className='ml-auto'/>
    </div>
    <div className='font-roboto text-base font-medium leading-5'>1 like</div>
    <div className='font-roboto text-xs leading-5'>
       <span className='font-medium'> model.susan </span> If life were predictable it would cease to be lifehome we've ev...more
    </div>
    </div>
  )
}

export default Instapostmodel
