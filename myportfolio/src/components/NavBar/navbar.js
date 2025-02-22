import React from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png';


const NavBar = () =>{
    return (
       <nav className="navbar">
        <img src={logo}alt='Logo' className='logo' />
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>
            <Link className="desktopMenuListItem">Skills</Link>

        </div>
        <button className = "desktopMenuBtn">
            <img src={contactImg} alt="" className="deskTopMenuImg"/>Contact Me
        </button>
    
    
       </nav>
    )
}

export default NavBar;