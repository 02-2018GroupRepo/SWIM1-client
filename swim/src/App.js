import React, { Component } from 'react';
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';
import DockDoor from './Component/DockDoor';
import ASNSearch from './Component/ASNSearch';
import ASNDisplay from './Component/ASNDisplay';
import ASNReceived from './Component/ASNReceived';
import Login from './Component/Login.js'
import { Route, Link } from 'react-router-dom';
import './index.css';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state ={
      isAuth : false
    }
    this._isAuth = this._isAuth.bind(this);
  }

  _isAuth(){
    console.log("changing state of is auth");
    this.setState({
      isAuth: true
    })
  }
  
  render() {

    return (
      <div className="container App">
        <Route path="/" component={Header} />
        <Route path="/" component={ (props)=> <Login props={props} auth={this.state.isAuth} isAuth={this._isAuth} />} />
        <Route exact path="/" component={(props)=> <Home props={props} auth={this.state.isAuth} />} />
        <Route exact path= "/receiving" component={DockDoor} />
        <Route exact path="/outbound" component={ASNReceived} />
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
