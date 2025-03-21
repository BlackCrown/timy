"use client"
import React, { MouseEventHandler } from 'react'
import { Menu } from "@deemlol/next-icons";
import { Bell } from "@deemlol/next-icons";

export default function Header() {
  function handleClick(event: MouseEventHandler<PointerEvent>):void {
    if (event instanceof MouseEvent) { 
      console.log(event);
    }
  }

  return (
    <header className='flex place-content-between items-center rounded-b-3xl p-3 gap-4 bg-[#f2f0f0]'>
      <div className='flex gap-4'>
        <div>
          <button onClick={handleClick} className='cursor-pointer'>
          <Menu size={28} color="#000000" />
          </button>
        </div>
      <h1>Dashborad</h1>
      </div>

      <div>
        <div className='w-30 h-15 rounded-2xl bg-blue-600'/>
      </div>

      <div className='flex gap-4'>
        <Bell size={28} color='#000000' />
        <p>Usuário Marcos</p>
        <div>
          <div className='w-8 h-8 rounded-full bg-red-600'/>
        </div>
      </div>


    </header>
  )
}

