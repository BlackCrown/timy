"use client"
import React from 'react'
import { Menu, Bell, X, CheckSquare, Clock, Settings, Activity, AppWindowMac  } from "@deemlol/next-icons";
import Link from 'next/link';

export default function Header() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [page, setPage] = React.useState('Dashboard');
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
      <h1>{page}</h1>
      </div>

      <Link href='/' onClick={() => setPage('Dashboard')}>
        <div className='w-30 h-15 rounded-2xl bg-blue-600'/>
      </Link>

      <div className='flex gap-4'>
        <Bell size={28} color='#000000' />
        <p>Usuário Marcos</p>
        <div>
          <div className='w-8 h-8 rounded-full bg-red-600'/>
        </div>
      </div>
      </div>
      <div className={`${openMenu ? 'flex' : 'hidden'} -mt-4 absolute bg-[#f2f0f0] w-fit h-[calc(100vh-72px)]`}>
          <ul className='flex flex-col gap-2 px-4 mt-12 w-46'>
            <li>            
              <Link href="/" onClick={() => setPage('Dashboard')} className='flex gap-1 hover:text-red-600 hover:bg-zinc-200 p-2 rounded-2xl'>
              <AppWindowMac size={20}/>
                Dashborad</Link>
              </li>
            <li>
              <Link href="/analytics" onClick={() => setPage('Analytics')} className='flex gap-1 hover:text-red-600 hover:bg-zinc-200 p-2 rounded-2xl'>
            <Activity size={20}/>
                Analytics</Link>
              </li>
            <li>
              <Link href="/timesheets" onClick={() => setPage('Timesheets')} className='flex gap-1 hover:text-red-600 hover:bg-zinc-200 p-2 rounded-2xl'>
              <Clock size={20}/>
              Timesheets</Link>
              </li>
            <li>
              <Link href="/todo" onClick={() => setPage('Todo')} className='flex gap-1 hover:text-red-600 hover:bg-zinc-200 p-2 rounded-2xl'>
              <CheckSquare size={20}/>
                Todo</Link>
              </li>
            <li>
              <Link href="/settings" onClick={() => setPage('Settings')} className='flex gap-1 hover:text-red-600 hover:bg-zinc-200 p-2 rounded-2xl'>
            <Settings size={20}/>
                Settings</Link>
              </li>
          </ul>
        </div> 
    </header>
  )
}

