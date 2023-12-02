import React from 'react'
import { FaTimes } from 'react-icons/fa'

import Instapostmodel from './instapostmodel';
import Postfeatures from './postfeatures';
import Fbcard from './fbcard';
import Linkedincard from './linkedincard';
import Othersocialmediacard from './othersocialmediacard';

const PreviewPost = ({socialMedia, caption}) => {
    const mediaCompo = (socialMedia)=>{
        if(socialMedia == "instagram"){
            return <Instapostmodel caption={caption}/>;
        } else if(socialMedia == "linkedin"){
            return <Linkedincard caption={caption}/>;
        } else if(socialMedia == "facebook"){
            return <Fbcard caption={caption}/>;
        }
        else{
            return <Othersocialmediacard caption={caption} />;
        }
    }


    return (
        <div className='grid grid-cols-5 w-full gap-8'>
            
            <div className='col-span-3'>
                <Postfeatures />
            </div>
            {mediaCompo(socialMedia)}
        </div>
    )
}

export default PreviewPost;
