import React, { Component } from 'react';
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';
import DockDoor from './Component/DockDoor';
import ASNSearch from './Component/ASNSearch';
import ASNDisplay from './Component/ASNDisplay';
import ASNReceived from './Component/ASNReceived';
import Loaded from './Component/Loaded';
import SavedPage from './Component/SavedPage';
import { Route, Link } from 'react-router-dom';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path= "/receiving" component={DockDoor} />
        <Route exact path="/outbound" component={ASNReceived} />
        <Route exact path="/serial" component={Loaded} />
        <Route exact path= "/dataSaved" component={SavedPage} />
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
