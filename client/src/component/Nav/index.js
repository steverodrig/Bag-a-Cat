import React, { useState } from "react";
import { Link } from "react-router-dom";
import './nav.css';
import LoginButton from "../LoginBtn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<<<<<<< HEAD
import Profile from "../Profile";
=======
import Profile from "../Profile"
>>>>>>> main


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobleMenu = () => setClick(false);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">               
               <Link to="/" className="navbar-logo" onClick={closeMobleMenu}>
               <FontAwesomeIcon icon="cat" />
                  B-A-C                  
               </Link> 
               <div className="menu-icon" onClick={handleClick}>
                   <i className={click ? 'fas fa-cat' : 'fas fa-bars'} />
               </div>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-cat' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobleMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/adopt' className='nav-links' onClick={closeMobleMenu}>
                                Adopt
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/aboutus' className='nav-links' onClick={closeMobleMenu}>
                                About us
                            </Link>
                        </li>
                        <li>
                            <LoginButton />
                        </li>
                        <li>
                            <Profile />
                        </li>
                    </ul>

                </div>
                
            </nav>
        </>
    );
}


export default Navbar;