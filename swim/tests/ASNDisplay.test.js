import React from 'react';
import ReactDOM from 'react-dom';
import ASNDisplay from '../src/Component/ASNDisplay';
import {BrowserRouter as Router} from 'react-router-dom'; 

require('jest-localstorage-mock');
const mockSerialNumbers = [];
it('renders without crashing', () => {
	localStorage.setItem("userType", "norm");
  const div = document.createElement('div');
  ReactDOM.render(<Router><ASNDisplay serialNumbers={mockSerialNumbers}/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});