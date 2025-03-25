import React, { ReactNode } from 'react'
import {MoreVertical  } from "@deemlol/next-icons";

interface iCardProps{
  title: string;
  text: string;
  icon?: ReactNode;
}

export default function Card(props: iCardProps) {
  return (
  <div className='bg-gray-100 rounded-2xl p-4 max-w-70 w-full'>
    <div className='grid grid-cols-2 gap-x-4 h-[100%] items-start'>
      <h3 className='font-bold'>{props.title}</h3>
      <MoreVertical size={28} className='p-1 justify-self-end align-self-top' color='#db4b4b'/>
      <p className='self-center font-medium'>{props.text}</p>
      <div className='bg-yellow-100 w-14 h-14 place-self-end place-content-center border-2 border-red-200 rounded-xl'>
        {props.icon}
    </div>
  </div>
  </div>
  )
}