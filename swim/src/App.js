import React, { Component } from 'react';
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';
import DockDoor from './Component/DockDoor';
import ASNSearch from './Component/ASNSearch';
import ASNDisplay from './Component/ASNDisplay';
import ASNReceived from './Component/ASNReceived';
import Admin from './Component/Admin';

import Login from './Component/Login.js'

import Loaded from './Component/Loaded';
import SavedPage from './Component/SavedPage';

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
    this.loggingOut = this.loggingOut.bind(this);
  }

  _isAuth(){
    console.log("changing state of is auth");
    this.setState({
      isAuth: true
    })
  }

  loggingOut(){
    console.log("log out in app")
    this.setState({
      isAuth: false
    })
      localStorage.setItem('userType', null);

  }
  
  render() {

    return (
      <div className="container App">
        <Route path="/" component={(props)=> <Header props={props} logOut={this.loggingOut}/>} />
        <Route path="/" component={ (props)=> <Login props={props} auth={this.state.isAuth} isAuth={this._isAuth} />} />
        <Route exact path="/" component={(props)=> <Home props={props} auth={this.state.isAuth} />} />
        <Route exact path= "/receiving" component={(props)=> <DockDoor history={this.props.history} props={props}/>} />
        <Route exact path="/outbound" component={ASNReceived} />
        <Route exact path="/serial" component={Loaded} />
        <Route exact path= "/configure" component={Admin} />
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
