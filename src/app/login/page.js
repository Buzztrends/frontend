import { FaGoogle } from 'react-icons/fa';
import Image from 'next/image';

export default function Login() {
  return (
    <div className="grid grid-cols-2 gap-40 justify-center content-center h-screen bg-black px-16 bg-custom-gradient">
      <form className='text-black flex flex-col bg-white gap-4 justify-center w-450 h-626 rounded-2xl border-2 border-black p-10  font-poppins '>
        <div className="self-center text-3xl font-medium leading-51 tracking-wider">Log in to Buzz Trends</div>
        <div className="self-center text-base font-normal leading-5 tracking-wide">Please enter your details</div>


        <div >
       <label htmlFor="email" className='text-base font-medium leading-5 tracking-wide'>Email</label><br></br>
       <input type='email' id="email" placeholder='Enter your email' className='mt-2 h-[49.58px] rounded-[12px] border border-[1px] w-full p-4 placeholder-base placeholder-light placeholder-leading-5 placeholder-tracking-wide'></input>
       </div>

       <div>
       <label htmlFor="password" className='text-base font-medium leading-5 tracking-wide'>Password</label>
       <input type='password' id="Password"  placeholder='Enter your password' className='mt-2 h-[49.58px] rounded-[12px] border border-[1px] w-full p-4 placeholder-base placeholder-light placeholder-leading-5 placeholder-tracking-wide'></input>
       </div>

       <div className='flex justify-between text-xs font-medium leading-4 tracking-wide'>
        
          <div className="remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="vehicle1"> Remember me</label>
          </div>

          <div className="forgot-password">
            Forgot password
          </div>


       </div>


        <button className='w-full bg-linear-gradient h-[56px] rounded-[12px] border-2 text-base font-medium leading-33 tracking-wide text-white'>
            Sign in</button>

        <div className="self-center">OR</div>

        <button className="self-center flex justify-center gap-5 items-center h-[56px] rounded-[12px] border-2 w-full" >
          <FaGoogle />
          <span>Sign in with Google</span>
        </button>
      </form>

      <div className=''>
        <Image alt="" src={'/images/Buzztrend logo 1.png'} width={500} height={100}/>
      </div>
  </div>
  )
}
