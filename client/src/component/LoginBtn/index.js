import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../button.css";


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();

  return !isAuthenticated && (
  <button className='btn--outline' onClick={() => loginWithRedirect()}>Log In</button>)
};

export default LoginButton;