import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderMenu = () => {
    return (
        <header className='bg-dark text-white'>
            <nav className='p-2'>
                <NavLink to='/'className={(props)=> props.isActive ? 'mx-2 bg-white text-dark p-3 text-decoration-none' : 'mx-2 text-white link'}>Home</NavLink>
                <NavLink to='/login' className={(props)=> props.isActive ? 'mx-2 bg-white text-dark p-3 text-decoration-none' : 'mx-2 text-white link'} style={(props)=> props.isActive ? {fontWeight:'bold'} : {} }>Login</NavLink>
                <NavLink to='/user/login' className={(props)=> props.isActive ? 'mx-2 bg-white text-dark p-3 text-decoration-none' : 'mx-2 text-white link'} style={(props)=> props.isActive ? {fontWeight:'bold'} : {} }>User Login</NavLink>
                <NavLink to='/about' className={(props)=> props.isActive ? 'mx-2 bg-white text-dark p-3 text-decoration-none' : 'mx-2 text-white'}>About</NavLink>
                <NavLink to='/contact' className={(props)=> props.isActive ? 'mx-2 bg-white text-dark p-3 text-decoration-none' : 'mx-2 text-white'}>contact</NavLink>
                <NavLink to='/search' className={(props)=> props.isActive ? 'mx-2 bg-white text-dark p-3 text-decoration-none' : 'mx-2 text-white'}>Search</NavLink>
            </nav>
        </header>
    )
}

export default HeaderMenu