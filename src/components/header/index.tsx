import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <div className='header'>
      <nav>
        <ul className='header__list'>
          <li className='header__item'>
            <NavLink to='/products' className='link'>
              Products
            </NavLink>
          </li>
          <li className='header__item'>
            <NavLink to='/' className='link'>
              Home
            </NavLink>
          </li>
          <li className='header__item'>
            <NavLink to='/form' className='link'>
              Form
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
