"use client"
import React from 'react'
import { Menu, Bell, X } from "@deemlol/next-icons";

export default function Header() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const handleClick =(event: React.MouseEvent<HTMLButtonElement>)=> {
      event.preventDefault();
      setOpenMenu(!openMenu)!;

  }

    const showMenu = (): JSX.Element => {
      if (openMenu) {
        return(<X size={28} color="#000000"/>)
      }else{
        return <Menu size={28} color="#000000" />
      }
    }

  return (
    <header className='block relative w-full'>
      <div className='flex place-content-between items-center rounded-b-3xl p-3 gap-4 bg-[#f2f0f0]'>
      <div className='flex gap-4'>
        <div>
          <button onClick={handleClick} className='cursor-pointer' aria-expanded={openMenu}>
            {showMenu()} 
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
      </div>
      <div className='-mt-4 absolute bg-[#f2f0f0] w-fit h-[100vh]'>
          <ul className='flex flex-col gap-4 px-4 mt-12 w-46'>
            <li><a href="#">Dashborad</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Timesheets</a></li>
            <li><a href="#">Todo</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </div> 
    </header>
  )
}

