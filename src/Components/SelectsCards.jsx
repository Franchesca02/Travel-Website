import React from 'react'

const SelectsCards = (props) => {
  return (
    <div className='relative'>
    <img src={props.bg} alt='/' className='w-full h-full object-cover' />
    <div className='absolute top-0 left-0 bg-gray-900/30 w-full h-full'>
        <a href="https://www.tripadvisor.com/AttractionProductReview-g150809-d11449893-Cozumel_Submarine_Expedition-Cozumel_Yucatan_Peninsula.html" className='absolute text-2xl left-4 bottom-4 text-white font-bold hover:text-slate-500 hover:text-3xl'>{props.text}</a>
    </div>
            </div>
  )
}

export default SelectsCards