

import React from 'react'
import Button from './Button'
import Image from 'next/image'
const GetApp = () => {
  return (
    <section className='flex justify-center flex-col w-full   space-x-0 md:space-x-2 py-8 md:max-w-[90rem] mx-auto    relative  overflow-hidden -mt-24 mb-14 md:mb-20 pb-10'>
        {/* main div */}
       <div className=' px-2 w-full  text-white flex flex-col  bg-getapp bg-center md:bg-contain  py-10  justify-between items-center  md:flex-row gap-6 '>
          {/* first div */}
          <div className=' flex  flex-col justify-center items-start flex-1'>
            {/* text */}
            <div className='flex flex-col justify-start items-start px-10'>
              <h2 className='  py-5 capitalize scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl '>Get for free now!</h2>
              <p className='py-5 leading-7 [&:not(:first-child)]:mt-6'>Availabel on iOS and android download now!</p>
            </div>
            {/* buttons */}
            <div className='flex flex-col  px-10 gap-4 w-full py-3'>
            {/* style,title,icon */}
              <Button title="Download Now"  style="px-6 py-3 text-white bg-green-500  md:w-full" icon={'/apple.svg'} />
              <Button title="Download Now"  style="px-6 py-3   bg-black text-white   md:w-full" icon={'/played.svg'} />

            </div>
          </div>
          {/* images */}
          <div className='flex-1 justify-center  items-center w-full '>
            <Image src={'/phones.png'} height={600} width={400} alt='mobile phones pictures'></Image>
          </div>
        </div> 
         
    </section>
  )
}

export default GetApp