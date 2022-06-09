import React from 'react';
import logo from './../images/logo.svg';
import icon from './../images/icon.svg';

export default function Header() {
  return(
    <nav className='flex justify-between items-center'>
      <div>
        <img src={logo} alt="company's logo" />
      </div>
      <div className="flex items-center">
        <div>
          <img src={icon} alt="an icon" />
        </div>
        <div className="ml-2">
          <span className="days block text-lg text-white font-bold">Day 1</span>
          <span className="text-sm duration">of 5</span>
        </div>
      </div>
    </nav>
  );
}