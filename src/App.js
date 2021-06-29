import React from 'react';
import './App.css';
import Nav from './components/Nav';
// import Footer from  './components/Footer';
// import Premise from "./components/Premise";
import Home from './components/Home';
import Gallery2 from './components/Gallery2';
import About from './components/About';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="App">
     <Nav />
       <Route exact path="/" component={Home}/>
        {/* <Route path="/premise" component={Premise}/> */}
        <Route exact path="/gallery" component={Gallery2}/>
        <Route exact path="/about" component={About}/>
     {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
