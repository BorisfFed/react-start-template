import React from 'react';
import logo from '../../logo.svg';
import './Logo.css';

export const Logo = () => {
  return (
  <div>
    <img src={logo} className="logo" alt="logo" />
  </div>
  );
}