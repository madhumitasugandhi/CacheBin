import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row flex-wrap gap-4 text-blue'>
        <NavLink to="/">
            Home
        </NavLink>
        <NavLink to="/Pastes">
            Pastes
        </NavLink>
    </div>
  )
}

export default Navbar