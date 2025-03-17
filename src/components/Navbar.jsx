import React from 'react'
import { NavLink } from 'react-router-dom'
import Wrapper from './layout/Wrapper'

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      <Wrapper>
        <nav className="flex items-center justify-center space-x-8 py-4">
          <NavLink 
            to='/' 
            className={({ isActive }) => 
              `text-lg font-medium transition-colors duration-200 ${
                isActive 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/pastes"
            className={({ isActive }) => 
              `text-lg font-medium transition-colors duration-200 ${
                isActive 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`
            }
          >
            Pastes
          </NavLink>
        </nav>
      </Wrapper>
    </div>
  )
}

export default Navbar