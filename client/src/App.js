import React from "react";
import './App.css';
import "./component/icons/icons"
import Home from "./pages/home"
import Aboutus from "./pages/aboutus"
import Adopt from "./pages/adopt"
import Navbar from "../src/component/Nav/index"
import LearnMore from "./pages/learnMore"
import Howworks from "./pages/howworks"
import Donate from "./pages/donate"
import Volunteer from "./pages/volunteer"
import Foster from "./pages/foster"
import Careers from "./pages/careers"
import CatApp from "./pages/catApp"
import {  BrowserRouter as Router, Switch,  Route,} from "react-router-dom";
import Testimonials from "./pages/testimonials";

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
          <Route path='/howworks' component={Howworks} />
          <Route path='/testimonials' component={Testimonials} />
          <Route path='/donate' component={Donate} />
          <Route path='/volunteer' component={Volunteer} />
          <Route path='/foster' component={Foster} />
          <Route path='/careers' component={Careers} />
          <Route path='/catApp/:id' component={CatApp} />
          <Route path= '/catmemes' component={() => {window.location.href = "https://imgur.com/search/score?q=cat+memes"; return null}}/>
          <Route path= '/YouTube' component={() => {window.location.href = "https://www.youtube.com/channel/UCNo5PGwGmfnEprEUUb9AGgw"; return null}}/>
          <Route path= '/Cattitude' component={() => {window.location.href = "https://scratch.mit.edu/projects/404898794/fullscreen/"; return null}}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
