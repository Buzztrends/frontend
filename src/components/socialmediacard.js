import React from 'react'

import { FaInstagram,FaFacebook,FaLinkedin,FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

import {LiaGreaterThanSolid} from 'react-icons/lia';

const Socialmediacard = ({title,trending,key,selected,setSelected,position}) => {
  function nameToIcons(val){
    if(val==="trending on Instagram"){
      return <FaInstagram />;
    }
    if(val==="trending on Twitter"){
      return <FaXTwitter />;
    }
    if(val==="trending on Pinterest"){
      return <FaPinterest />;
    }
    if(val==="trending on Facebook"){
      return <FaFacebook />;
    }
    if(val==="trending on Linkedin"){
      return <FaLinkedin />;
    }
    if(val==="trending on TikTok"){
      return <FaTiktok />;
    }
  }
  // console.log("card called");
  return (
    <button className='rounded-lg border border-gray-200 shadow-sidd p-5 flex flex-col gap-4 relative' onClick={()=>setSelected(position)}>
      <div className='text-lg font-semibold tracking-tighter'>{title}</div>
      <div className='flex justify-between items-center text-sm font-semibold text-font-color'>
        <div className='flex items-center gap-1'>
            trending on {nameToIcons(trending)}
        </div>
       

      </div>
      <div className='absolute top-1/2 right-2'>{selected===position?<LiaGreaterThanSolid color='font-color'/>:""}</div>
    </button>
  )
}

export default Socialmediacard
