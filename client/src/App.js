import React from "react";
import './App.css';
import "./component/icons/icons"
import Home from "./pages/home"
import Aboutus from "./pages/aboutus"
import Adopt from "./pages/adopt"
import Navbar from "../src/component/Nav/index"
import LearnMore from "./pages/learnMore"
import {  BrowserRouter as Router, Switch,  Route,} from "react-router-dom";

function App() {
  
  return (
    <>
       <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutus' component={Aboutus} />
          <Route path='/adopt' component={Adopt} />
          <Route path='/learnMore/:id' component={LearnMore} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
