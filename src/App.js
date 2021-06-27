import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from  './components/Footer';
import Premise from "./components/Premise";
import Home from './components/Home';
import Twombly1 from './components/Twombly1';
import Twombly2 from './components/Twombly2';
import Twombly3 from './components/Twombly3';
import Twombly4 from './components/Twombly4';
import Twombly5 from './components/Twombly5';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="App">
     <Nav />
       <Route exact path="/" component={Home}/>
        <Route path="/premise" component={Premise}/>
        <Route exact path="/twombly1" component={Twombly1}/>
        <Route exact path="/twombly2" component={Twombly2}/>
        <Route exact path="/twombly3" component={Twombly3}/>
        <Route exact path="/twombly4" component={Twombly4}/>
        <Route exact path="/twombly5" component={Twombly5}/>
     {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
