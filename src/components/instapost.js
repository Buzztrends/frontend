import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io';
import Instapostmodel from './instapostmodel';
import Postfeatures from './postfeatures';

const Instapost = () => {
    return (
        <div className='grid grid-cols-5 w-full gap-8'>
            <div className='insta col-span-2 flex flex-col gap-2'>
                <div className='flex justify-center items-center gap-2'>
                    <IoLogoInstagram size={30} />
                    <span className='font-roboto text-xl font-semibold leading-6'>Instagram Post</span>
                </div>
                <Instapostmodel />
            </div>

            <div className='col-span-3'>
                <Postfeatures />
            </div>
        </div>
    )
}

export default Instapost
