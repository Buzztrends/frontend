'use client';
import React from 'react'
import { IoChevronUp } from 'react-icons/io5';
import { FaArrowDown } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Button from './button';
import { useContentContext } from "@/context/contentContext";
import { redirect } from 'next/navigation';
import Link from 'next/link';

const Postfeatures = () => {
  const {selectedImages} = useContentContext();
  // console.log(selectedImages);
  const handleDownload = () => {
    // console.log(selectedImages[0]);
    // for (let i = 1; i <= selectedImages.length; i++) {
    //   setTimeout(() => {
    //     window.open(selectedImages[i-1],'_blank');
    //     console.log(selectedImages[i-1]);
    //   }, (i - 1) * 5000); 
    // }

    
    for (const selectedImage of selectedImages) {
      // Create a download link for each image in the array
      const downloadLink = document.createElement('a');
      downloadLink.href = selectedImage;
      downloadLink.download = "selectedImage.split('/').pop()"; // Extract filename from URL
      downloadLink.style.display = 'none';
    
      // Append the download link to the body of the document
      document.body.appendChild(downloadLink);
    
      // Trigger the download by clicking the download link
      downloadLink.click();
    
      // Remove the download link from the body after the download is complete
      URL.revokeObjectURL(downloadLink);
      document.body.removeChild(downloadLink);
    }
  };
  return (
    <div className='p-5 flex flex-col gap-8 justify-top items-center h-full mt-4'>
      <div className='self-center text-center font-roboto text-4xl font-medium leading-10 p-auto'>
        Your Post Will Look Like This
      </div>
      {/* <button className='w-1/3 h-20 rounded-lg border-2 border-gray-400 bg-gradient-linear text-white p-2 text-xl self-center'>Publish</button> */}
      {/* <Button buttonText={"Publish"} /> */}
      <div className='grid grid-cols-2 gap-x-10 gap-y-5'>
        <button className='col-span-1 h-[49px] w-full rounded-[12px] border-2 border-black text-center hover:bg-gradient-linear hover:text-white opacity-20'>
          Save
        </button>

        <button onClick={handleDownload} className='col-span-1 h-[49px] w-full rounded-[12px] border-2 border-black flex items-center p-4 justify-between hover:bg-gradient-linear hover:text-white'>
          <span>Download</span>
          <div className='animate-bounce mx-2 mt-1'>

          <FaArrowDown />
          </div>
        </button>

        {/* <button className=' bg-purple-100 flex flex-col gap-4 items-center justify-center col-span-1 h-[107px] w-full rounded-[12px] p-4 font-poppins text-base font-medium leading-5 tracking-tighter'>
          <span>Save as Draft</span>
          <span>Save to Campaigns</span>
        </button> */}

        <button className=' opacity-20 col-span-1 h-[70px] w-full rounded-[12px] border-2 border-black flex items-center p-4 justify-between hover:bg-gradient-linear hover:text-white'>
          <span>Send for<br></br> approval</span>
          <FaCheck />
        </button>

      </div>

      <div className='flex items-center justify-center gap-2 '>
        <span className='font-poppins text-base font-medium leading-7 tracking-tighter'>Share:</span>
       <Link href='https://www.instagram.com/' target='_blank'> <FaInstagram size={25} /></Link>
       <Link href='https://www.facebook.com/' target='_blank'> <FaFacebook size={25} /></Link>
        <Link href='https://www.linkedin.com/' target='_blank'> <FaLinkedin size={25} /></Link>
        <Link href='https://twitter.com/?lang=en' target='_blank'> <FaXTwitter size={25} /></Link>
      </div>

    </div>
  )
}

export default Postfeatures
