'use client';

import React, { useState } from 'react';
import Newsbuttons from '../components/Newsbuttons';
import NewsCard from './newscard';

const Trendingnews = ({details,mapper, toggleModal}) => {
   

    console.log(details),"line 10";
    const topic=["industry","general_news","current_events"];
    const [currentNews,setCurrentNews]=useState(topic[0]);
  
  return (
    <div className='flex flex-col gap-5'>
        <div className='text-2xl font-medium leading-9 tracking-wide text-font-color'>Trending News & Moments</div>
        <div className='flex gap-4'>
        {topic.map((item, index) =>{
             return    <Newsbuttons key={index} title={mapper[item]} actual={item} currentNews={currentNews} setCurrentNews={setCurrentNews}/> 
        })}
        </div>
        <div className='flex flex-wrap gap-x-12 gap-y-5'>
          {details[currentNews].map((item,index)=>
            <NewsCard key={index} data={item} toggleModal={toggleModal} />
          )}
      
        </div>
    </div>
  )
}

export default Trendingnews;
