import React from 'react'
import { Play, MoreVertical,PieChart  } from "@deemlol/next-icons";

export default function HomePanel() {
  return (
    <div className='p-8 bg-gray-400 rounded-t-3xl h-[calc(100vh-84px)]'>
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
      <div className='bg-gray-100 rounded-2xl p-2 max-w-40'>
        <div className='grid gap-x-4 items-start grid-cols-2'>
          <h3>Weekly Activity</h3>
          <MoreVertical size={28} className='p-1 justify-self-end align-self-top' color='#db4b4b'/>
          <p className='self-center'>0%</p>
          <div className='bg-yellow-100 p-2 border-2 border-red-200 rounded-xl'>
          <PieChart size={48} color='#db4b4b'/>
          </div>
        </div>
      </div>
    </div>
  )
}

