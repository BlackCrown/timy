import React from 'react'
 import  {Play, PieChart, Zap, Check } from "@deemlol/next-icons"
import Card from './card'

export default function HomePanel() {
  console.log(typeof(Play));
  
  return (
    <div className='p-8 bg-gray-400 rounded-t-3xl h-[100%]'>
      <div className='header flex place-content-between'>
        <div>
          <h1 className='font-bold text-xl'>Today</h1>
          <p  className='font-semibold text-xs'>Seg 22, 2025 | 13:45 </p>
        </div>
        <div className='flex gap-3 bg-amber-50 items-center p-4 rounded-2xl'>
          <h1 className='font-bold'>Start Timer</h1>
          <div className='bg-yellow-100 border-2 border-red-200 p-1 rounded-lg'>
          <Play size={24} color='#db4b4b'/>
          </div>
        </div>
      </div>
      <section className='grid grid-cols-1 justify-items-center justify-between mt-8 gap-4 md:justify-around sm:flex'>
          <Card title='Weekly Activity' text='0%' icon={<PieChart className=' place-self-center' />}/>
          <Card title='Worked This Week' text='40:12:00' icon={<Zap  className='place-self-center' />}/>
          <Card title='Todo`s List' text='5' icon={<Check  className='place-self-center' />}/>
      </section>
    </div>
  )
}

