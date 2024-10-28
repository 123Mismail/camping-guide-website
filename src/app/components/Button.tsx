

 import Image from 'next/image';
import React from 'react'
  type  Buttons={
    style:string;
    title:string;
    icon?:string
  }
const Button = ({style,title,icon}:Buttons) => {
  return (
   <button
   type='button'
   className={`text-base font-bold rounded-full  flex justify-center items-center space-x-3   ${style}`}
   >
     {icon && <Image src={icon} height={20} width={20} alt="user login png" className='text-white'
     style={{ filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(200deg)' }}
     ></Image>}
    <label htmlFor="#" className='ml-1'>{title}</label>
   </button>
  )
}

export default Button