import React from "react";
import './App.css';
import "./component/icons/icons"
import Home from "./pages/home"
import Aboutus from "./pages/aboutus"
import Signin from "./pages/signin"
import Adopt from "./pages/adopt"
import Navbar from "../src/component/Nav/index"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";



function App() {
  
 
  return (
    <>
       <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutus' component={Aboutus} />
          <Route path='/adopt' component={Adopt} />
          <Route path='/signin' component={Signin} />
        </Switch>
      </Router>
      
       
    </>
  );
}

export default App;
