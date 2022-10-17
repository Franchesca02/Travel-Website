import React from 'react'

const SelectsCards = (props) => {
  return (
    <div className='relative'>
    <img src={props.bg} alt='/' className='w-full h-full object-cover' />
    <div className='absolute top-0 left-0 bg-gray-900/30 w-full h-full'>
        <p className='absolute text-2xl left-4 bottom-4 text-white font-bold'>{props.text}</p>
    </div>
            </div>
  )
}

export default SelectsCards