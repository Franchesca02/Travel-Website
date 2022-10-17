import React from 'react'
import Borabora from '../Assets/borabora.jpg'
import Borabora2 from '../Assets/borabora2.jpg'
import Keywest from '../Assets/keywest.jpg'
import Maldives from '../Assets/maldives.jpg'
import Maldives2 from '../Assets/maldives2.jpg'
import SelectsCards from './SelectsCards'

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SelectsCards bg={Borabora} text='Cozumel' />
        <SelectsCards bg={Borabora2} text='Dubai' />
        <SelectsCards bg={Keywest} text='Jamaica' />
        <SelectsCards bg={Maldives} text='Maldives' />
        <SelectsCards bg={Maldives2} text='Antigua' />
        <SelectsCards bg={Borabora} text='Key West' />
    </div>
  )
}

export default Selects