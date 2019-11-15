import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Activities from './Components/Activities';
//import Messages from './Messages';
//import Schedule from './Schedule';
//import Tutors from './Tutors';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <h1> MentorBoard</h1>
      <Switch>
        <Route exact path="/" component={Navbar}/>
        <div className = 'container'> 
        <Route path="/activities" component={Activities}/>
        </div>
        </Switch>
      </header>
    </div>
    </Router>
  );
  }

export default App;
