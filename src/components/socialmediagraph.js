import React from 'react'

const Socialmediagraph = ({hashtags}) => {
  
  return (
    <div className='rounded-lg border border-black p-8 flex flex-col gap-8 h-full items-center '>
      
      <div className='flex flex-wrap gap-5'>
        {hashtags.map((item,ind)=> <span key={ind} className=''>{item}</span>)}
      </div>
    </div>
  )
}

export default Socialmediagraph
