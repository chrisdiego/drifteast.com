import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Navigation from './Navigation';
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
              </Switch>
            <Footer />
          </div>
        </BrowserRouter>  
    );
  }
}

export default App;
