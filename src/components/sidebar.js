"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import './sidebar.css';
import { IoSearchOutline } from "react-icons/io5";
import { MdAdd } from 'react-icons/md';
import { IoChevronDown } from 'react-icons/io5';
import { IoCreateOutline } from 'react-icons/io5';

import Link from "next/link";

import { useSidebarContext } from "@/context/sidebarContext";
// import { useUserContext } from "@/context/userContext";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import LogoSvg from './logoSvg';

const Sidebar = () => {
    // const [isresearch, setIsresearch] = useState(true);
    const router = useRouter();
    const { selectedTab } = useSidebarContext();
    const [researchitem, setResearchitem] = useState(null);

    const [username, setUsername] = useState("");
    // const [gensLeft, setGensLeft] = useState(0);
    useEffect(() => {
        setUsername(Cookies.get('username'));
        // setGensLeft(Cookies.get('gensLeft'));
    }, [])
    // const { username } = useUserContext();

    // console.log('called from', {calledFrom})
    // console.log('inside sidebar', { selectedTab })
    return (
        <div className='gradient-sidebar w-1/5 h-screen p-4 text-white flex flex-col fixed'>
            <div>
                <LogoSvg />
            </div>
            <div className='mt-[20px] flex flex-col gap-6 '>
                <div className='flex flex-col items-start gap-3'>
                    <Link href={'/home'} className='w-full'>
                        <button className={`${selectedTab == "research" ? "sidebar-active" : ""} w-full py-1 px-3`} onClick={() => { setResearchitem(null) }}>
                            <div className='flex items-center justify-between px-2'>
                                <div className='flex justify-center items-center gap-1'>
                                    {/* <IoSearchOutline /> */}
                                    <span>Research</span>
                                </div>
                                {/* <IoChevronDown /> */}
                            </div>
                        </button>
                    </Link>

                    {selectedTab == "research" && <div className='flex flex-col w-11/12 gap-2 self-end items-start'>
                        <Link href={'/home/#trending'} className='w-full'>
                            <button onClick={() => setResearchitem("news")} className={`${researchitem == "news" ? "sidebar-research-item" : ""} py-1 px-2 w-full text-left`}>Trending Moments</button>
                        </Link>
                        <Link href={'/home/#socialmedia'} className='w-full'>
                            <button onClick={() => setResearchitem("socialmedia")} className={`${researchitem == "socialmedia" ? "sidebar-research-item" : ""} py-1 px-2 w-full text-left`}>Social Media</button>
                        </Link>
                        <Link href={'/home/#competition'} className='w-full'>
                            <button onClick={() => setResearchitem("competition")} className={`${researchitem == "competition" ? "sidebar-research-item" : ""} py-1 px-2 w-full text-left`}>Competition [Coming Soon]</button>
                        </Link>
                    </div>}

                </div>
                <Link href={'/generate-content'} className='w-full'>
                    <button onClick={() => { setResearchitem(null) }} className={`${selectedTab == "generate-content" ? "sidebar-active" : ""} flex items-center gap-1 w-full py-1 px-3`}>
                        {/* <IoCreateOutline />
                        <span>Create Content</span> */}
                        <div className='flex items-center justify-between px-2'>
                            <div className='flex justify-center items-center gap-1'>
                                <IoCreateOutline />
                                <span>Create Content </span>
                                {/* {gensLeft ? `(${gensLeft})`:null} */}
                            </div>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;

