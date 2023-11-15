'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import { FaEllipsisH } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import {FaGreaterThan} from 'react-icons/fa6';
import { FaLessThan } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io';
import { useContentContext } from "@/context/contentContext";

const Linkedincard = () => {
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
                    <IoLogoLinkedin size={30} />
                    <span className='font-roboto text-xl font-semibold leading-6'>Linkedin Post</span>
                </div>
    <div className='flex flex-col p-5 rounded-lg border border-black gap-3 font-roboto text-xs leading-4'>
      {/* {selectedImages} */}
      <div className=' flex  gap-1'>
        <img alt="" src={'/images/Logo (3).png'} width={10} height={10}  />
        <div className='flex flex-col '>
            <span className='font-bold'>ULTRA SAFE</span>
            <span className=''>326 followers</span>
            <div className=''>20h</div>
        </div>
         <FaEllipsisH className='ml-auto'/>
      </div>
      <div className='flex flex-col gap-1'>
      <div className='font-normal'>
        Lacus amet, laoreet viverra id faucibus nisi cras est sit pellentesque amet in auctor ac sapien enim nulla tellus risus ornare lobortis commodo in proin in fermentum .

      </div>
      <div className='text-blue-500'>#hastag #hastag #hashtag </div>
      <div className='text-blue-500'>See translation</div>
      </div>

      <div className='relative'>
    <img alt="" src={selectedImages[num]} width={300} height={100} />
    {selectedImages.length!=1 && <div  className='absolute right-0 top-1/2 cursor-pointer' onClick={()=>handleImages("inc")}><FaGreaterThan  /></div>}
    {selectedImages.length!=1 && <div  className='absolute left-0 top-1/2 cursor-pointer' onClick={()=>handleImages("dec")}><FaLessThan  /></div>}
    </div>

    <img alt="" src={'/images/Group 168.png '} className='object-fill' width={300} height={100}/>
    </div>
    </div>
  )
}

export default Linkedincard;
