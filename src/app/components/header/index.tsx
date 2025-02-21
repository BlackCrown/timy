import React from 'react';
import toggleMenu from './script'

export function Header(){
  return(
    <div className="flex">
      <div className="flex gap-4 p-6 grow  content-center">
        <div>Logo</div>
        <h3>Dashboard</h3>
      </div>

      <div className="grid grid-cols-2 gap-2 content-center">
        <span className="text-right">N</span>
        <img className="justify-end" src="#" alt="profile photo" />
      </div>
      <div>
      <div className="lg:hidden flex p-2 justify-end">
      <button id="menu-button" className="text-3xl  focus:outline-none">
      &#9776;
      </button>
      </div>
      <nav id="menu">
        <ul className="hidden lg:flex justify-self-end gap-4 p-6">
          <li>Dashboard</li>
          <li>Analytics</li>
          <li>Todo</li>
          <li>Settings</li>
        </ul>
      </nav>
      </div>

    </div>
  )
}