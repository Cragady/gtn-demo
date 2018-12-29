import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Mach1, Mach2, Mach3 } from './pages';
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
            <Route path="/" component={Mach1} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
