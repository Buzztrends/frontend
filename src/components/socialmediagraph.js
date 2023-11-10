import React from 'react'

const Socialmediagraph = ({hashtags}) => {
  
  return (
    <div className='rounded-lg border-2 border-border-color border-solid p-5 shadow-primary flex flex-col gap-8 h-full'>
      Sunburst Analysis:
      <div className='flex flex-wrap gap-5'>
        {hashtags.map((item,ind)=> <span className=''>{item}</span>)}
      </div>
    </div>
  )
}

export default Socialmediagraph
