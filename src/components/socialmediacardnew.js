import React from 'react'

import { FaInstagram, FaFacebook, FaLinkedin, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";


const Socialmediacardnew = ({ title, trending, key, hashtags, setDataForChart}) => {
  function nameToIcons(val) {
    if (val === "trending on Instagram") {
      return <FaInstagram />;
    }
    if (val === "trending on Twitter") {
      return <FaXTwitter />;
    }
    if (val === "trending on Pinterest") {
      return <FaPinterest />;
    }
    if (val === "trending on Facebook") {
      return <FaFacebook />;
    }
    if (val === "trending on Linkedin") {
      return <FaLinkedin />;
    }
    if (val === "trending on TikTok") {
      return <FaTiktok />;
    }
  }
  // console.log("card called");
  return (
    <div className='flex flex-col w-1/5 border border-gray-100 shadow-sidd cursor-pointer gap-2 justify-between p-3' onClick={()=>{document.getElementById('chart-popup').showModal(); setDataForChart({title, hashtags})}}>
      <div className='text-sm font-medium'>{title}</div>

      <div className='flex items-center gap-1 text-sm'>
        trending on {nameToIcons(trending)}
      </div>
    </div>

  )
}

export default Socialmediacardnew
