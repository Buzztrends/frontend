import React from 'react'

const Newsbuttons = ({index,title,actual,currentNews,setCurrentNews}) => {
   
  return (
    <button className={`${currentNews==actual?"bg-gradient-linear text-white":" text-font-color"} px-2 py-1 rounded-full border border-font-color border-solid`} onClick={()=>setCurrentNews(actual)}>
      {title}
    </button>
  )
}

export default Newsbuttons
