import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'; 
import Home from '../src/Component/Home';
require('jest-localstorage-mock');

it('renders without crashing', () => {
	localStorage.setItem("userType", "norm");
  const div = document.createElement('div');
  ReactDOM.render(<Router><Home/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});