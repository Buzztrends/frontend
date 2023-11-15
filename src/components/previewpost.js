import React from 'react'
import { FaTimes } from 'react-icons/fa'

import Instapostmodel from './instapostmodel';
import Postfeatures from './postfeatures';
import Fbcard from './fbcard';
import Linkedincard from './linkedincard';

const PreviewPost = ({socialMedia}) => {
    const mediaCompo = (socialMedia)=>{
        if(socialMedia == "instagram"){
            return <Instapostmodel/>;
        } else if(socialMedia == "linkedin"){
            return <Linkedincard/>;
        } else if(socialMedia == "facebook"){
            return <Fbcard/>;
        }
    }


    return (
        <div className='grid grid-cols-5 w-full gap-8'>
            {mediaCompo(socialMedia)}
            <div className='col-span-3'>
                <Postfeatures />
            </div>
        </div>
    )
}

export default PreviewPost;
