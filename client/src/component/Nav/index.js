import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  
    
    Link
  } from "react-router-dom";



                 

    class Navbar extends Component {
        

    render(){
        return(
            <nav className = "navbar">
               
            <ul className = "navbar-nav">
        <li className="logo">          
        <br />
        <FontAwesomeIcon icon="cat"/>
        <span className="link-text">B-A-C</span>   
            
        </li>
                                
        
       <li className = "nav-item">
           <a href = "/Aboutus" className = "nav-link" >
           <FontAwesomeIcon icon="cat" />           
           <span className = "link-text" >about us</span>
           </a>
       </li>
       <li className = "nav-item">
           <Link to= "/Contactinfo" className = "nav-link" >
           <FontAwesomeIcon icon="cat" />           
           <span className = "link-text" >contact info</span>
           </Link>
       </li>
       <li className = "nav-item">
           <a href = "/Adopt" className = "nav-link" >
           <FontAwesomeIcon icon="cat" />
           <span className = "link-text" >adopt</span>
           </a>
       </li>
       <li className = "nav-item">
           <a href = "/" className = "nav-link" >
           <FontAwesomeIcon icon="brain"/>
           <span className = "link-text" >Home</span>
           </a>
       </li>
      
    </ul>
    {/* </div> */}
</nav>

        )

    }

    }

    





export default Navbar