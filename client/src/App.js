import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav } from './components/Nav';
import {  Mach2, Mach3, Editor } from './pages';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <hr style={{borderWidth: '5px', borderColor: 'black', marginBottom: '-1px', zIndex: '-1'}}/>
          <Switch>
            <Route path="/mach3" component={Mach3} />
            <Route path="/mach2" component={Mach2} />
            <Route path="/editor" component={Editor} />
            <Route path="/" component={Mach2} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
