import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'; 
import ASNReceived from '../src/Component/ASNReceived';
require('jest-localstorage-mock');

it('renders without crashing', () => {
	localStorage.setItem("userType", "norm");
  const div = document.createElement('div');
  ReactDOM.render(<Router><ASNReceived/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});