import Image from 'next/image'
import React from 'react'
import { star } from '../../../public/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <Image src={imgURL} alt={name} height={280} width={280}/>
        <div className="mt-8 flex justify-start gap-2">
            <Image src={star} height={24} width={24} alt=''/>
            <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>            
        </div>
        <div>
            <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
            <h3 className='mt-3 font-semibold font-montserrat text-coral-red leading-normal text-2xl'>{price}</h3>
        </div>
    </div>
  )
}

export default PopularProductCard
