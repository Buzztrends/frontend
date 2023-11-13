'use client';

import React,{useState} from 'react'
import Image from 'next/image';
import { FaEllipsisH } from 'react-icons/fa';
import {BiUserCircle} from 'react-icons/bi';
import {FaGreaterThan} from 'react-icons/fa6';
import { FaLessThan } from 'react-icons/fa6';
import {AiOutlineLike} from 'react-icons/ai';
import {BiComment} from 'react-icons/bi';
import {PiShareFatLight} from 'react-icons/pi';
import { IoLogoFacebook } from 'react-icons/io';
import { useContentContext } from "@/context/contentContext";


const Fbcard = () => {
    const { selectedImages } = useContentContext();
    const [num,setNum]=useState(0);

    
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
     <div className='insta col-span-2 flex flex-col gap-2'>
                <div className='flex justify-center items-center gap-2'>
                    <IoLogoFacebook size={30} />
                    <span className='font-roboto text-xl font-semibold leading-6'>Facebook Post</span>
                </div>
    <div className='flex flex-col p-5 rounded-lg border border-black gap-3 font-inter text-xs leading-4'>
      <div className='flex gap-2'>
        <BiUserCircle size={28}/>
        <div className='flex flex-col'>
            <span className='font-normal text-sm leading-4 '>Rishabh</span>
            <span className='leading-2 text-xs'>1 min</span>
        </div>
        <FaEllipsisH className='ml-auto'/>
      </div>
      <div className='text-xs'>Your post text #awesome #emoticons</div>
<div className='relative'>
    <Image src={selectedImages[num]} width={300} height={100}/>
    {selectedImages.length!=1 && <div  className='absolute right-0 top-1/2 cursor-pointer' onClick={()=>handleImages("inc")}><FaGreaterThan  /></div>}
    {selectedImages.length!=1 && <div  className='absolute left-0 top-1/2 cursor-pointer' onClick={()=>handleImages("dec")}><FaLessThan  /></div>}
    </div>

    <div className='flex flex-col gap-1'>
        <hr></hr>
        <div className='flex justify-between items-center text-sm'>
            <div className='flex gap-1 items-center'>
                <PiShareFatLight/>
               <span>  Like </span>
            </div>
            <div className='flex gap-1 items-center'>
                <BiComment />
               <span>  Comment </span>
            </div>
            <div className='flex gap-1 items-center'>
                <AiOutlineLike />
               <span>Share </span>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Fbcard