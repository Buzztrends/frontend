'use client';
import React, { useState } from 'react'
import Socialmediacard from './socialmediacard';
import {LiaLessThanSolid, LiaGreaterThanSolid} from 'react-icons/lia';
import './socialmedia.css';
import Socialmediagraph from './socialmediagraph';

const Socialmedia = ({id,data,mapper}) => {
 
  data=data["social_media"];
 console.log(data,"data in sm");


const [ind,setIndex]=useState(0);
const [selected,setSelected]=useState(0);

const changeContent= (val)=>{
  const curr=ind;
  if(val=="prev"){
    setIndex(ind-1);
    setSelected(3*(curr-1));
  }
  else{
    setIndex(ind+1);
    setSelected(3*(curr+1));
  }
}



  return (
    <div className='flex gap-5 font-Poppins'>

      <div id={id} className='flex flex-col gap-2 w-1/2 scroll-mt-24'>
          <div className='text-2xl font-medium leading-9 tracking-wide text-font-color'>Social Media</div>
          <div className='w-full flex flex-col gap-3'>
              {data.slice(ind * 3, 3 * (ind + 1)).map((item, index) => 
                 <Socialmediacard key={index} title={item.title} hashtags={item.hashtag} selected={selected} setSelected={setSelected} position={ind * 3 + index}/> 
               )}
               {data.slice(ind * 3, 3 * (ind + 1)).length === 2 && <div className='h-28'></div>}
                {data.slice(ind * 3, 3 * (ind + 1)).length === 1 && <><div className='h-24'></div><div className='h-28'></div></>}
          <div className='flex justify-between items-center text-font-color font-bold'>
            <button className={`flex gap-1 items-center ${ind===0 ?"button-disable":""}`} disabled={ind===0} onClick={()=>changeContent("prev")}>
                <LiaLessThanSolid />
                <span>PREV</span>
            </button>
            <button className={`flex gap-1 items-center ${3*(ind+1)>data.length ?"button-disable":""}`} disabled={3*(ind+1)>data.length} onClick={()=>changeContent("next")}>
                
                <span>NEXT</span>
                <LiaGreaterThanSolid />
            </button>
          </div>
          </div>
      </div>

      <div className='w-1/2 mt-11 mb-9'>
              <Socialmediagraph hashtags={data[selected].hashtag}/>
      </div>
    </div>

  )
}

export default Socialmedia;
