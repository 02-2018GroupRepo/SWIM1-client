import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../src/Component/NavBar';
import {BrowserRouter as Router} from 'react-router-dom'; 
require('jest-localstorage-mock');

it('renders without crashing', () => {
	localStorage.setItem("userType", "norm");
  const div = document.createElement('div');
  ReactDOM.render(<Router><NavBar/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});

