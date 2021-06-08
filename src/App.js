import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Artworks from './components/Artworks';
import Detail from './components/Detail';
import Footer from  './components/Footer';
import Premise from "./components/Premise";
import Collection from './components/Collection';
import Home from './components/Home'

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
     <Nav />
       <Route exact path="/" component={Home}/>
        <Route path="/premise" component={Premise}/>
        <Route exact path="/artworks" component={Artworks}/>
        <Route exact path="/artworks/:id" component={Detail}/>
        <Route path="/collection" component={Collection}/>
     <Footer />
    </div>
    </Router>
  );
}
}

export default App;
