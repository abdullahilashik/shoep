"use client"
import React, {useState} from 'react'
import Button from '../ui/button'
import { arrowRight } from '../../../public/icons'
import { shoes, statistics } from '@/constants/assets'
import Image from 'next/image'
import { bigShoe1 } from '../../../public/images'
import ShoeCard from '../ShoeCard'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section className='w-full flex flex-col xl:flex-row gap-10 items-center justify-center min-h-screen' id='home'>
        {/* left content */}
        <div className="flex items-start justify-center xl:w-2/5 w-full flex-col max-xl:padding-x pt-28">
            <p className='text-xl text-coral-red font-montserrat capitalize'>our summer collection</p>
            <h1 className='text-8xl mt-10 font-palanquin capitalize max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
              <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-20'>The New Arrival</span>
              <br />
              <span className='text-coral-red inline-block mt-3'>Nike</span>
              <span> Shop</span>
            </h1>
            <p className='capitalize font-light font-montserrat py-8'>discover nike innovation, quality and comfort to your active live everyday!</p>
            <Button label={'Get Started'} iconUrl={arrowRight}/>
            {/* staatistics */}
            <div className="flex items-start justify-start gap-16 mt-28 w-full flex-wrap">
              {
                statistics.map(stats=>(
                  <div className='flex flex-col' key={stats.label}>
                    <span className='text-2xl font-bold font-montserrat'>{stats.label}</span>
                    <span className='text-xl font-light'>{stats.value}</span>
                  </div>
                ))
              }
            </div>
        </div>
        {/* shoe image */}
        <div className='relative w-full flex-1 flex justify-center items-center bg-primary xl:min-h-screen bg-hero bg-cover bg-center max-xl:py-40'>
          <Image src={bigShoe1} alt='Big Shoe' width={610} height={500} className='object-contain relative z-10'/>
          <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
            {
              shoes.map(shoe=>(
                <div key={shoe.id}>
                  <ShoeCard imgUrl={shoe} changeBigShoeImage={(shoe)=> setBigShoeImg(shoe)} bigShoeImage={bigShoe1}/>
                </div>
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default Hero
