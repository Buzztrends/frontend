'use client';
import React, { useState } from 'react'
import Socialmediacard from './socialmediacard';
import {LiaLessThanSolid, LiaGreaterThanSolid} from 'react-icons/lia';
import './socialmedia.css';
import Socialmediagraph from './socialmediagraph';

const Socialmedia = () => {
  const data = [
  {
    title: "Judge reimposes Trump gag order in federal election interface case",
    num: "5"
  },
  {
    title: "New Legislation on Voter ID Requirements",
    num: "3"
  },
  {
    title: "Supreme Court Rules on Campaign Finance Limits",
    num: "7"
  },
  {
    title: "Judge reimposes Trump gag order in federal election interface case",
    num: "100"
  },
  {
    title: "New Legislation on Voter ID Requirements",
    num: "35"
  },
  {
    title: "Supreme Court Rules on Campaign Finance Limits",
    num: "70"
  },
  {
    title: "Election Results Analysis",
    num: "2"
  },
  {
    title: "Voting System Security Updates",
    num: "4"
  }

];


const [ind,setIndex]=useState(0);

const changeContent= (val)=>{
  if(val=="prev"){
    setIndex(ind-1);
  }
  else{
    setIndex(ind+1);
  }
}



  return (
    <div className='flex gap-5 font-Poppins'>

      <div className='flex flex-col gap-2 w-1/2'>
          <div className='text-24 font-semibold leading-3 tracking-tighter text-font-color'>Social Media</div>
          <div className='w-full flex flex-col gap-3'>
              {data.slice(ind * 3, 3 * (ind + 1)).map((item, index) => 
                 <Socialmediacard key={index} title={item.title} num={item.num} /> 
               )}

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

      <div className='w-1/2 self-center'>
              <Socialmediagraph />
      </div>
    </div>

  )
}

export default Socialmedia;
