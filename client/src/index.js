import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render( 
    <Auth0Provider
        domain="dev-hz4ce-o5.us.auth0.com"
        clientId="5r2Zr8IHg3PGqUWLp0nzs6vSeIqgX0dG"
        redirectUri={window.location.origin}
    >
    <App />
    </Auth0Provider>,
    document.getElementById('root')
);


reportWebVitals();
