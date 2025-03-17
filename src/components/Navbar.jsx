import React from 'react'
import {  NavLink } from 'react-router-dom'
import Wrapper from './layout/Wrapper'

const Navbar = () => {
  return (
    <div   >
        <Wrapper>

        

<div className="flex flex-row place-content-evenly p-4 text-xl sm:text-2xl">
<NavLink to='/'>
    Home
</NavLink>
<NavLink to="/pastes">
    Pastes
</NavLink>

</div>

         
    </Wrapper>
     </div>
  )
}

export default Navbar