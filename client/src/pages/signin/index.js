import React from "react";
import '../../App.css'






function Signin() {
    



    return (
        <>
      
        <div className='card'>
        <h1 className ="signin">Check out these EPIC Kitty Cats!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
            <input  type="email" className="form-control" id="foatingInput" placeholder="name@whatevs.com">
            <label  for="floatingInput">Email address</label>   
            </input>
            <br></br>
            <input type="password" className="form-control" id="foatingInput" placeholder="password">
            <label  for="floatingInput">Password</label>   
            </input>
            <br></br>
            <input  type="username" className="form-control" id="foatingInput" placeholder="username">
            <label for="floatingInput">user name</label>   
            </input>             
            </ul>
          </div>
        </div>
      </div>
      
        </>        
            
    )
    
}

export default Signin
