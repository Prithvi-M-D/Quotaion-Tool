import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
export default function Header() {
  return (
    
        <div className='header-container'>
            <Link className='button' to='/vendordashboard'>Dashboard</Link>
            <Link className='button' to='/client'>Get Started</Link>
            <Link className='button' to='/'>Sign out</Link>
        </div>
    
  )
}

