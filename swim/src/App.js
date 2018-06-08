import React, { Component } from 'react';
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';
import DockDoor from './Component/DockDoor';
import ASNSearch from './Component/ASNSearch';
import ASNDisplay from './Component/ASNDisplay';
import ASNReceived from './Component/ASNReceived';
import { Route, Link } from 'react-router-dom';
import './index.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container App">
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path= "/receiving" component={DockDoor} />
        <Route exact path="/outbound" component={ASNReceived} />
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
