"use client";
import { FaGoogle } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
// import { useUserContext } from "@/context/userContext";

export default function Login() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({});

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function setLogin() {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };


  const updateLoginData = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  const handleLogin = async (e) => {
    setLogin();
    e.preventDefault();

    try {
      const data = {
        username: loginData['username'],
        password: loginData['password']
      }

      const headers = {
        'api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
      }

      const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/user/authenticate`, data, { headers });

      if (res.status == 200 || res.status == 201) {
        // setUsername(res.data['username']);
        // setCompanyName(res.data['company_name']);
        // setCompanyId(res.data['company_id']);
        Cookies.set('authToken', res.data['token']);
        Cookies.set('username', res.data['username']);
        Cookies.set('companyId', res.data['company_id']);
        Cookies.set('companyName', res.data['company_name']);
        router.push("/home");

        // localStorage.setItem('authToken', res.data['token']);
      } else {
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="grid grid-cols-2 gap-40 justify-center content-center h-screen bg-black px-16 bg-custom-gradient">
      <form className=' text-black flex flex-col bg-white gap-10 justify-center w-450 h-626 rounded-2xl border-2 border-black p-10  font-poppins ' onSubmit={handleLogin}>
        <div className="self-center text-3xl font-medium leading-51 tracking-wider">Log in to BuzzTrends</div>
        <div className="self-center text-base font-normal leading-5 tracking-wide">Please enter your details</div>


        <div >
          <label htmlFor="username" className='text-base font-medium leading-5 tracking-wide'>Username</label><br></br>
          <input type='text' id="username" name="username" placeholder='Enter your username' className='mt-2 h-[49.58px] rounded-[12px] border border-[1px] w-full p-4 placeholder-base placeholder-light placeholder-leading-5 placeholder-tracking-wide' onChange={updateLoginData}></input>
        </div>

        <div>
          <label htmlFor="password" className='text-base font-medium leading-5 tracking-wide'>Password</label>
          <input type='password' id="password" name="password" placeholder='Enter your password' className='mt-2 h-[49.58px] rounded-[12px] border border-[1px] w-full p-4 placeholder-base placeholder-light placeholder-leading-5 placeholder-tracking-wide' onChange={updateLoginData}></input>
        </div>

        {/* <div className='flex justify-between text-xs font-medium leading-4 tracking-wide'>
        
          <div className="remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me"> Remember me</label>
          </div>

          <div className="forgot-password">
            Forgot password
          </div>


       </div> */}

        <button className='w-full bg-linear-gradient h-[56px] rounded-[12px] border-2 text-base font-medium leading-33 tracking-wide text-white' type='submit'>
          {!isLoggedIn && <span>Sign in</span>}
          {isLoggedIn && <span className="loading loading-bars loading-md"></span>}
        </button>

        {/* <div className="self-center">OR</div>

        <button className="self-center flex justify-center gap-5 items-center h-[56px] rounded-[12px] border-2 w-full" >
          <FaGoogle />
          <span>Sign in with Google</span>
        </button> */}
      </form>

        <div className='flex flex-col items-center justify-content-center'>
          <img alt="" src="public/images/Buzztrend logo 1.png" className='img h-28'/>
          <img alt="" src="/public/buzztrend.svg" className='img h-90 pt-12'/>
          
        </div>
      </div>
  );
};
