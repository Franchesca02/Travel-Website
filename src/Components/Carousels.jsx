import React, {  useState } from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvWrUsIeaaGkqNWCNES4vTnzsi4u8AvAHVdLVXZwF16fJo7QrtX6ks0IMlJalxHkpVLjw&usqp=CAU'
    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFMiNHQGyEgSdk-pkkXKrPq1GWHtm65fH10xB8Oq-mVh2bL3B8unjEXHjlUBEJm4fPeo&usqp=CAU'
    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvWrUsIeaaGkqNWCNES4vTnzsi4u8AvAHVdLVXZwF16fJo7QrtX6ks0IMlJalxHkpVLjw&usqp=CAU'
    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFMiNHQGyEgSdk-pkkXKrPq1GWHtm65fH10xB8Oq-mVh2bL3B8unjEXHjlUBEJm4fPeo&usqp=CAU'
    },
];

const Carousels = () => {
    const [slides, setSlides] = useState(0)
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill className='absolute top-[50%] text-white text-3xl cursor-pointer left-8' />
        <BsArrowRightSquareFill className='absolute top-[50%] text-white text-3xl cursor-pointer right-8' />
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