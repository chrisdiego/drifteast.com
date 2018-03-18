import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Navigation from './Navigation';
import Calendar from './Calendar';
import Media from './Media';
import Contact from './Contact';
import Footer from './Footer';
import './styles/css/App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="app">
            <Navigation />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/calendar" component={Calendar} />
                <Route exact path="/media" component={Media} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            <Footer />
          </div>
        </BrowserRouter>  
    );
  }
}

export default App;
