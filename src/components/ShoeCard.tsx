"use client"
import React from 'react';
import Image from 'next/image';

const ShoeCard = ({imgUrl, changeBigShoeImage, bigShoeImage}) => {

    const handleClick = ()=>{
        if(bigShoeImage != imgUrl.bigShoe){
            console.log(bigShoeImage);
            changeBigShoeImage(imgUrl.bigShoe)
        }
    };
  return (
    <div className={`border-2 rounded-xl ${bigShoeImage===imgUrl ? 'border-coral-red': 'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={()=>handleClick()}>
        <div className='flex justify-center items-center bg-card bg-cover bg-center p-2 hover:bg-opacity-20 sm:h-40 rounded-xl max-sm:p-4'>
            <Image src={imgUrl.thumbnail} height={127} width={137} alt=''/>
        </div>
    </div>
  )
}

export default ShoeCard