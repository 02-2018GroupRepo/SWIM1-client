import React, { Component } from 'react';
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';
import DockDoor from './Component/DockDoor';
import ASNSearch from './Component/ASNSearch';
import ASNDisplay from './Component/ASNDisplay';
import { Route, Link } from 'react-router-dom';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path= "/DockDoor" component={DockDoor} />
        <Route exact path= "/ASNSearch" component={ASNSearch} />
        <Route exact path= "/ASNDisplay" component={ASNDisplay} />
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
