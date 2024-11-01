"use client";

import React,{useState} from 'react'
import './sidebar.css';
import { FaSearch } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import { IoChevronDown } from 'react-icons/io5';
import { IoCreateOutline } from 'react-icons/io5';

export const Sidebar = () => {
    const [isresearch,setIsresearch] =useState(true);
    const [researchitem,setResearchitem]= useState(null);

  return (
    <div className='gradient-sidebar w-[251px] h-screen px-4 py-5 text-white flex flex-col'>
        <img src='/images/Buzztrend logo 1.png'></img>

        <div className='sidebar-top mt-[35px] flex flex-col gap-6'>
        <div className='flex flex-col items-center gap-3'>
            <button className={`${isresearch?"sidebar-active":""} w-full `} onClick={()=>{setIsresearch(true); setResearchitem(null)}}>
                <div className='flex items-center justify-between px-2'>
                    <div className='flex justify-center items-center gap-1'>
                    <FaSearch />
                    <span>Research</span>
                    </div>
                    <IoChevronDown />
                </div>
            </button>

           {isresearch &&  <div className='flex flex-col ml-4 items-start gap-2'>
                <button onClick={()=>setResearchitem("news")} className={`${researchitem=="news"?"sidebar-research-item":""}`}>Trending News/Moments & Custom Topic</button>
                <button onClick={()=>setResearchitem("socialmedia")} className={`${researchitem=="socialmedia"?"sidebar-research-item":""}`}>Social Media</button>
                <button onClick={()=>setResearchitem("competition")} className={`${researchitem=="competition"?"sidebar-research-item":""}`}>Competition</button>
            </div>}

        </div> 
        <button onClick={()=>{setIsresearch(false); setResearchitem(null)}} className={`${isresearch?"":"sidebar-active"} flex items-center gap-1 w-full`}><IoCreateOutline /><span>Create Content</span>  </button>
        </div>

        <div className='sidebar-bottom mt-auto flex flex-col justify-center items-center gap-3'>
            <div className='profile flex items-center justify-center gap-2'>
              <FaUserCircle />   <span>Darshan Tailor</span>
            </div>
            <div className='settings flex items-center justify-center gap-2'>
                <MdSettings /> <span>Settings</span>
            </div>
        </div>
    </div>
  )
}

