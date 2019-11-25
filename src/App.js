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
import Schedule from './Components/Schedule';
// import Messages from './Components/Messages';
// import Tutors from './Components/Tutors';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <h1> MentorBoard</h1>
      <Switch>
        <Route exact path="/" component={Navbar}/>
      </Switch>
      </header>
      <div className = "App-body">
        <Switch>
        <Route path="/activities" component={Activities}/>  
        <Route path="/Schedule" component={Schedule}/>  
        {/* <Route path="/Messages" component={Messages}/>  
        <Route path="/Tutors" component={Tutors}/>   */}
        </Switch>
      </div>
    </div>
    </Router>
  );
  }

export default App;
