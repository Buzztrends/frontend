import React from 'react'
import { FaTimes } from 'react-icons/fa'

import Instapostmodel from './instapostmodel';
import Postfeatures from './postfeatures';
import Fbcard from './fbcard';
import Linkedincard from './linkedincard';

const Instapost = () => {
    return (
        <div className='grid grid-cols-5 w-full gap-8'>
            <Linkedincard />

            <div className='col-span-3'>
                <Postfeatures />
            </div>
        </div>
    )
}

export default Instapost
