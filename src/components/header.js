"use client";
import { FaUserCircle } from 'react-icons/fa';
import { IoPowerOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function Header({ header, width = 'full' }) {
	const router = useRouter();
	const [username, setUsername] = useState("");
    useEffect(() => {
        setUsername(Cookies.get('username'));
    }, [])


	return (
		<div className={`h-24 w-4/5 text-white content-center float-right flex items-center bg-gradient-linear z-40 fixed`}>
			<p className="text-center ml-6 font-semibold text-3xl whitespace-nowrap">{header}</p>

			<div className='flex items-start gap-6 w-full justify-end mr-6'>
				<div className='profile flex items-center justify-center gap-2'>
					<FaUserCircle />   <span>{username}</span>
				</div>
				<div className='settings flex items-center justify-center gap-2 cursor-pointer'>
					<IoPowerOutline /> <button onClick={() => {
						const cookies = ['username', 'companyId', 'companyName', 'authToken'];
						for (let cookie of cookies) {
							Cookies.remove(cookie);
						}
						router.push('/login');
					}}>Logout</button>
				</div>
			</div>
		</div>
	)
}