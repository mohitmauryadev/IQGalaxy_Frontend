import {NavLink} from 'react-router-dom'
import './Header.css'

const NavLinks = () => {


  
  return (
    <nav className = "nav-links">
       
      <NavLink to = "/" style = {({ isActive }) => ({ color: isActive ? '#ffc107' : '#007bff' })} >Home</NavLink>
      <NavLink to = "/about" style = {({ isActive }) => ({ color: isActive ? '#ffc107' : '#007bff' })}>About</NavLink>
      <NavLink to = "/subjects" style = {({ isActive }) => ({ color: isActive ? '#ffc107' : '#007bff' })}>Subjects</NavLink>
      <NavLink to = "/games" style = {({ isActive }) => ({ color: isActive ? '#ffc107' : '#007bff' })}>Games</NavLink>
      <NavLink to = "/contact" style = {({ isActive }) => ({ color: isActive ? '#ffc107' : '#007bff' })}>Contact</NavLink>
      {/* <NavLink to = "/contents" style = {({ isActive }) => ({ color: isActive ? '#ffc107' : '#007bff' })}>Contents</NavLink> */}
       {/* <NavLink to = "/login" style = {({ isActive }) => ({ color: isActive ? 'blue' : '#90E0EF' })}>Login</NavLink> */}
                                                                                                                        
    </nav>
  )
}

export default NavLinks
