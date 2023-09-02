import { products } from '@/constants/assets'
import React from 'react'
import PopularProductCard from './PopularProductCard'

const PopularProducts = () => {
  return ( 
    <div className='max-container max-sm:mt-12'>
      <div className="flex flex-col">
        <h1 className='text-3xl font-montserrat'>Our <span className='text-coral-red'>Popular</span> Products</h1>
        <p className='max-w-xl'>Products that has been popular among millions of customers and transformed them into their true beauty.</p>
        {/* popular product grid items */}
        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
          {
            products.map(product=>(
              <PopularProductCard key={product.name} {...product}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PopularProducts
