import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from  './components/Footer';
import Home from './components/Home';
import Gallery2 from './components/Gallery2';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="App">
     <Nav />
       <Route exact path="/" component={Home}/>
        <Route exact path="/gallery" component={Gallery2}/>
     <Footer />
    </div>
    </Router>
  );
}

export default App;
