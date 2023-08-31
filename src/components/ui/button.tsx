import React from 'react'
import Image from 'next/image'

const Button = ({label, iconUrl}) => {
  return (
    <button className='flex items-center gap-1 px-7 py-3 rounded-full border-coral-red border-2 bg-coral-red text-white justify-center font-montserrat'>
        <span>{label}</span>
        <Image src={iconUrl} alt={label} className='w-5 h-5 ml-2 rounded-full'/>
    </button>
  )
}

export default Button
