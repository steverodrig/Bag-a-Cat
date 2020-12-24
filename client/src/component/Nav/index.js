import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './nav.css';
import LoginButton from "../LoginBtn";
import LogoutButton from "../LogoutBtn";
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from "../Profile";

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobleMenu = () => setClick(false);
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    function verify() {
        if (!isAuthenticated) {
            loginWithRedirect();
        }
    }

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };
  useEffect(() => {      
      showButton();
      },[]);

    window.addEventListener('resize', showButton);
   

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Profile />
               <Link to="/" className="navbar-logo" onClick={closeMobleMenu}>
               <FontAwesomeIcon icon="cat" />
                  B-A-C                  
               </Link> 
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
                    <Link to='/adopt' className='nav-links' onClick={verify}>
                        Adopt
                    </Link>                       
                   </li>
                   <li className='nav-item'>
                    <Link to='/aboutus' className='nav-links' onClick={closeMobleMenu}>
                        About us
                    </Link>                       
                   </li>
               </ul>
               <LoginButton />
               <LogoutButton />
            </div>
        </nav>
        </>
    );
}


 export default Navbar;