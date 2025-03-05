import React from 'react';
import Link from 'next/link';


export function Header(){
  return(
    <main className='mx-4'>
      <div className="flex">
        <div className="my-auto">
          <div className='w-[64px] m-2 h-[64px] bg-secondary rounded-full'/>
        </div>

        <div className='my-auto grow'>
          <nav id="menu">
            <ul className="flex gap-8 justify-center">
              <Link href='/'>
              <li className='p-2 bg-principal-light rounded-xl'>Dashboard</li>
              </Link>
              <Link href='/'>
              <li className='p-2 bg-principal-light rounded-xl'>Analytics</li>
              </Link>
              <Link href='/'>
              <li className='p-2 bg-principal-light rounded-xl'>Todo</li>
              </Link>
              <Link href='/'>
              <li className='p-2 bg-principal-light rounded-xl'>Settings</li>
              </Link>
            </ul>
          </nav>
        </div>


        <div className='my-auto'>
          <div className='w-[32px] h-[32px] mx-2 my-auto bg-secondary rounded-full relative'>
            <span className="text-right text-xs font-bold absolute left-0 top-0">N</span>
            </div>
        </div>

      </div>
    </main>
  )
}