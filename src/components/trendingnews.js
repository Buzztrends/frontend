'use client';

import React, { useState } from 'react';
import Newsbuttons from '../components/Newsbuttons';
import NewsCard from './newscard';

const Trendingnews = ({id,data,mapper, toggleModal}) => {
   

    // console.log(details),"line 10";
    const tp=Object.keys(data);
    const top = tp.filter(item => item !== "social_media_trends");
    const topic=[];
    for(let i=0;i<top.length;i++){
      if(data[top[i]].length!=0){
        topic.push(top[i])
      }
    }
    const [currentNews,setCurrentNews]=useState(topic[0]);
  return (  
    <div id={id} className='flex flex-col gap-5 scroll-mt-24'>
        <div className='text-2xl font-medium leading-9 tracking-wide text-font-color'>Trending Moments</div>
        <div className='flex gap-4'>
        {topic.map((item, index) =>{
            return    <Newsbuttons key={index}  actual={item} currentNews={currentNews} setCurrentNews={setCurrentNews}/> 
          })}
        </div>
        <div className='flex flex-wrap gap-x-6 gap-y-5'>
          {data[currentNews].map((item,index)=>
            <NewsCard key={index} data={item} toggleModal={toggleModal} />
          )}
      
        </div>
    </div>
  )
}

export default Trendingnews;
