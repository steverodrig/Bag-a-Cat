import React from "react";
import './App.css';
import "./component/icons/icons"
import Home from "./pages/home"
import Aboutus from "./pages/aboutus"
import Contactinfo from "./pages/contactinfo"
import Adopt from "./pages/adopt"
import Navbar from "../src/component/Nav/index"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
 
  

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <Route exact path="/">
      <Home />
      </Route> 
      <Route path="/Aboutus">
      <Aboutus />
      </Route> 
      <Route path="/Contactinfo">
      <Contactinfo />
      </Route>
      <Route path="/Adopt">
      <Adopt />
      </Route>  
      </Switch>     
      </Router>
      
       
    </div>
  );
}

export default App;
