import React from 'react';
import { Logo } from '../../components/Logo/Logo';
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
    <div>
      <Logo />
    </div>
    </header>
  )
}