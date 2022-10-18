import React, {  useState } from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
    {
        url: 'https://plus.unsplash.com/premium_photo-1665673312802-fb77cf27b6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        url: 'https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        url: 'https://images.unsplash.com/photo-1665686310974-2ed1eb7f57ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
     },
    {
        url: 'https://images.unsplash.com/photo-1665911291889-270afca0a2d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
];

const Carousels = () => {
    const [slides, setSlides] = useState(0)
    const length = sliderData.length
    // console.log(length)
    const prevSlides = () => {
        setSlides (slides === length - 1 ? 0 : slides + 1)
    }
    const nextSlides = () => {
        setSlides(slides === 0 ? length - 1 : slides - 1)
    }
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill onClick={prevSlides} className='absolute top-[50%] text-gray text-3xl cursor-pointer left-8' />
        <BsArrowRightSquareFill onClick={nextSlides} className='absolute top-[50%] text-gray text-3xl cursor-pointer right-8' />
{sliderData.map((item, index) => {
    
    return (
        <div className={index === slides ? 'opacity-100' : 'opacity-0'}>
       {index === slides &&  <img src={item.url} alt='carousel' className='w-full rounded-md object-cover' />}
        
    </div>
    )
})}
    </div>
  )
}

export default Carousels