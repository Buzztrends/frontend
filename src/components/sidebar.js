"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import './sidebar.css';
import { IoSearchOutline } from "react-icons/io5";
import { MdAdd } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import { IoChevronDown } from 'react-icons/io5';
import { IoCreateOutline } from 'react-icons/io5';
import { RiLogoutCircleLine } from "react-icons/ri";

import Link from "next/link";

import { useSidebarContext } from "@/context/sidebarContext";
// import { useUserContext } from "@/context/userContext";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Sidebar = () => {
    // const [isresearch, setIsresearch] = useState(true);
    const router = useRouter();
    const { selectedTab } = useSidebarContext();
    const [researchitem, setResearchitem] = useState(null);

    const [username, setUsername] = useState("");
    const [gensLeft, setGensLeft] = useState(0);
    useEffect(() => {
        setUsername(Cookies.get('username'));
        setGensLeft(Cookies.get('gensLeft'));
    }, [])
    // const { username } = useUserContext();

    // console.log('called from', {calledFrom})
    // console.log('inside sidebar', { selectedTab })
    return (
        <div className='gradient-sidebar w-1/5 h-screen px-4 py-5 text-white flex flex-col fixed'>
            <img alt="" src={'/images/Buzztrend logo 1.png'} width={220} height={100} />
            <div className='mt-[35px] flex flex-col gap-6 '>
                <div className='flex flex-col items-start gap-3'>
                    <Link href={'/home'} className='w-full'>
                        <button className={`${selectedTab == "research" ? "sidebar-active" : ""} w-full py-1 px-3`} onClick={() => { setResearchitem(null) }}>
                            <div className='flex items-center justify-between px-2'>
                                <div className='flex justify-center items-center gap-1'>
                                    <IoSearchOutline />
                                    <span>Research</span>
                                </div>
                                <IoChevronDown />
                            </div>
                        </button>
                    </Link>

                    {selectedTab == "research" && <div className='flex flex-col w-11/12 gap-2 self-end items-start'>
                        <Link href={'/home/#trending'} className='w-full'>
                            <button onClick={() => setResearchitem("news")} className={`${researchitem == "news" ? "sidebar-research-item" : ""} py-1 px-2 w-full text-left`}>Trending News</button>
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
                                <span>Create Content {`(${gensLeft})`}</span>
                            </div>
                        </div>
                    </button>
                </Link>
            </div>

            <div className='sidebar-bottom mt-auto flex flex-col justify-center items-start gap-3'>
                <div className='profile flex items-center justify-center gap-2'>
                    <FaUserCircle />   <span>{username}</span>
                </div>
                <div className='settings flex items-center justify-center gap-2'>
                    <RiLogoutCircleLine /> <button onClick={() => {
                        const cookies = ['gensLeft', 'username', 'companyId', 'companyName', 'authToken'];
                        for(let cookie of cookies){
                            Cookies.remove(cookie);
                        }
                        router.push('/login');
                    }}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

