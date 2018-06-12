import React from 'react';
import ReactDOM from 'react-dom';
import Admin from '../src/Component/Admin';
import {BrowserRouter as Router} from 'react-router-dom'; 
require('jest-localstorage-mock');

it('renders without crashing', () => {
	localStorage.setItem("userType", "norm");
  const div = document.createElement('div');
  ReactDOM.render(<Router><Admin/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});