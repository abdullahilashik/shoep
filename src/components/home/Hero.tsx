import React from 'react'
import Button from '../ui/button'
import { arrowRight } from '../../../public/icons'
import { statistics } from '@/constants/assets'
import Image from 'next/image'
import { bigShoe1 } from '../../../public/images'

const Hero = () => {
  return (
    <section className='w-full flex flex-col xl:flex-row gap-10 items-center justify-center min-h-screen max-container' id='home'>
        {/* left content */}
        <div className="flex items-start justify-center xl:w-2/5 w-full flex-col max-xl:padding-x pt-28">
            <p className='text-xl text-coral-red font-montserrat capitalize'>our summer collection</p>
            <h1 className='text-8xl mt-10 font-palanquin capitalize max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
              <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
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
                  <div className='flex flex-col'>
                    <span>{stats.label}</span>
                    <span>{stats.value}</span>
                  </div>
                ))
              }
            </div>
        </div>
        {/* shoe image */}
        <div className='relative flex-1 flex justify-center items-center'>
          <Image src={bigShoe1} alt='Big Shoe' width={610} height={500} className='object-contain'/>
        </div>
    </section>
  )
}

export default Hero
