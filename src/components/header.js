"use client";
import { FaUserCircle } from 'react-icons/fa';
import { RiLogoutCircleLine } from "react-icons/ri";
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
		<div className={`h-24 w-${width} font-semibold text-3xl text-white content-center float-right flex items-center bg-gradient-linear z-40 fixed`}>
			<p className="text-center ml-6">{header}</p>
			<div className='mt-auto justify-center items-start gap-3'>
				<div className='profile flex items-center justify-center gap-2'>
					<FaUserCircle />   <span>{username}</span>
				</div>
				<div className='settings flex items-center justify-center gap-2'>
					<RiLogoutCircleLine /> <button onClick={() => {
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