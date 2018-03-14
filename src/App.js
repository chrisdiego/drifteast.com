import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Navigation from './Navigation';
import CalendarContainer from './CalendarContainer';
import Media from './Media';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="app">
            <Navigation />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/calendar" component={CalendarContainer} />
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
