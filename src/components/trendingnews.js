'use client';

import React, { useState } from 'react';
import Newsbuttons from '../components/Newsbuttons';
import NewsCard from './newscard';

const Trendingnews = ({data,mapper, toggleModal}) => {
   

    
    const topic=["industry_news","general_news","current_events"];
    const [currentNews,setCurrentNews]=useState(topic[0]);
  return (
    <div className='flex flex-col gap-5' onClick={()=>{toggleModal()}}>
        <div className='text-2xl font-medium leading-9 tracking-wide text-font-color'>Trending News & Moments</div>
        <div className='flex gap-4'>
        {topic.map((item, index) =>{
             return    <Newsbuttons key={index} title={mapper[item]} actual={item} currentNews={currentNews} setCurrentNews={setCurrentNews}/> 
        })}
        </div>
        <div className='flex flex-wrap gap-x-12 gap-y-5 '>
          {data[currentNews].map((item,index)=>
          <NewsCard data={item} />
          )}
      
        </div>
    </div>
  )
}

export default Trendingnews;
