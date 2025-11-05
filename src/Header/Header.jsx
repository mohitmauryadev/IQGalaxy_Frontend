// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavLinks from './NavLinks'
// import IQGalaxy from '../assets/Logos/IQGalaxy1.png'
// // import { LanguageChanger, LanguageProvider } from '../Pages/LanguageChanger'

// export default function Header() {

//   const burger = document.querySelector('.burger');
//     const toggleNavBar = () => {
//         const HeadNav = document.querySelector('.HeadNav');
//         HeadNav.classList.toggle('hidden');
//     };

//     return (

//         <div className="Header">

//             <div><img src={IQGalaxy} alt="IQGalaxy" className='w-[200px]' /></div>
//             <div className="HeadNav absolute right-[120px]"><NavLinks /></div>

//             <button className="loginbtn absolute right-[40px]  p-2 pl-6 pr-6 rounded-3xl text-blue-950">Login</button>

//             <div className="burger hidden w-[35px]" onClick={toggleNavBar}>
//                 <div className='w-full h-[3px] bg-green-400'></div>
//                 <div className='w-[29px] h-[3px] bg-green-400'></div>
//                 <div className='w-[24px] h-[3px] bg-green-400'></div>
//             </div>

//         </div>

//     );
// }



















import { NavLink } from "react-router-dom";
import IQGalaxy from "../assets/Logos/IQGalaxy1.png";
import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleNavBar = () => {
    setOpen(!open);
  };

  return (
    <header className="Header glass-header">
      {/* Logo */}
      <div>
        <img src={IQGalaxy} alt="IQGalaxy" className="w-[160px] md:w-[200px]" />
      </div>

      {/* Navigation Links */}
      <nav className={`HeadNav ${open ? "active" : ""}`}>
        <div className="nav-links">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#ffc107" : "#007bff",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "#ffc107" : "#007bff",
            })}
          >
            About
          </NavLink>
          <NavLink
            to="/subjects"
            style={({ isActive }) => ({
              color: isActive ? "#ffc107" : "#007bff",
            })}
          >
            Subjects
          </NavLink>
          <NavLink
            to="/games"
            style={({ isActive }) => ({
              color: isActive ? "#ffc107" : "#007bff",
            })}
          >
            Games
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "#ffc107" : "#007bff",
            })}
          >
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Login Button */}
      {/* <button className="loginbtn absolute right-[40px] px-6 py-2 rounded-3xl text-blue-950 font-semibold shadow-md hover:shadow-lg transition-all">
        Login
      </button> */}

      {/* Burger Menu (Mobile) */}
      <div className="burger w-[35px]" onClick={toggleNavBar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
}
