"use client"
import React from 'react'
import { Menu, Bell, X, CheckSquare, Clock, Settings, Activity, AppWindowMac  } from "@deemlol/next-icons";

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
      <div className={`${openMenu ? 'flex' : 'hidden'} -mt-4 absolute bg-[#f2f0f0] w-fit h-[calc(100vh-72px)]`}>
          <ul className='flex flex-col gap-4 px-4 mt-12 w-46'>
            <li className='flex gap-1'>
            <AppWindowMac size={20} color='#000000'/>
              <a href="#" className='hover:text-red-600'>Dashborad</a>
              </li>
            <li className='flex gap-1'>
            <Activity size={20} color='#000000'/>
              <a href="#">Analytics</a>
              </li>
            <li className='flex gap-1'>
              <Clock size={20} color='#000000'/>
              <a href="#">Timesheets</a>
              </li>
            <li className='flex gap-1'>
              <CheckSquare size={20} color='#000000'/>
              <a href="#">Todo</a>
              </li>
            <li className='flex gap-1'>
            <Settings size={20} color='#000000'/>
              <a href="#">Settings</a>
              </li>
          </ul>
        </div> 
    </header>
  )
}

