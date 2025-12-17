import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import {GiHamburgerMenu} from "react-icons/gi";

const Headers = () => {

    const [show, setShow] = useState(false);

    const handleButtonToggle = () => {
        return setShow(!show);
    }

    const closeMenu = () => {
        setShow(false);
    }
  return( 
    <header>
        <div className='container'>
            <div className='grid navbar-grid'>
                <div className='logo'>
                    <NavLink to='/' onClick={closeMenu}>
                     <h1>WorldAtlas</h1>
                    </NavLink>
                </div>
                <nav className={show ? "menu-mobile" : "menu-web"}>
                    <ul>
                        <li>
                            <NavLink to='/' onClick={closeMenu}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' onClick={closeMenu}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/country' onClick={closeMenu}>Country</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' onClick={closeMenu}>Contact</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className='ham-menu'>
                    <button onClick={handleButtonToggle}>
                        <GiHamburgerMenu/>
                    </button>
                </div>
            </div>
        </div>
    </header>
  
)}

export default Headers