import React from 'react'
import Competitioncard from './competitioncard'

const Competition = ({id}) => {
  return (
    <div id={id} className='flex flex-col gap-5 scroll-mt-24'>
        <div className='text-24 font-semibold leading-3 tracking-tighter text-font-color'>Competition</div>
        <div className='flex flex-wrap justify-between gap-y-7'>
            <Competitioncard />
            <Competitioncard />
            <Competitioncard />
            <Competitioncard />
        </div>
        </div>
)
  }

export default Competition;
