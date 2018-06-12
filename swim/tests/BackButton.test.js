import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'; 
import BackButton from '../src/Component/BackButton';
import Enzyme, { shallow } from 'enzyme';
 import Adapter from 'enzyme-adapter-react-16';
 Enzyme.configure({ adapter: new Adapter() });

require('jest-localstorage-mock');
//console.log(jest)
it('should handle the click event',() =>{
	window.alert=jest.fn()
	const output = shallow(<Router><BackButton /></Router>)
	output.simulate("click");
	expect(window.alert).toHaveBeenCalled("click")
})


it('renders without crashing', () => {
	localStorage.setItem("userType", "norm");
  const div = document.createElement('div');
  ReactDOM.render(<Router><BackButton/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});