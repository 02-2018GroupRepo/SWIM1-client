// import React from 'react';
// import DockDoor from '../src/Component/DockDoor';
// import Enzyme, {shallow} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-15';
// Enzyme.configure({ adapter: new Adapter() })


// describe('<DockDoor />', () => {
// 	it('renders 1 <DockDoor /> component', () => {
// 		const component = shallow(<DockDoor />);
// 		expect(component).toHaveLength(1);
// 	});
// });
import React from 'react';
import ReactDOM from 'react-dom';
import DockDoor from '../src/Component/DockDoor';
import {BrowserRouter as Router} from 'react-router-dom'; 
require('jest-localstorage-mock');

it('renders without crashing', () => {
	localStorage.setItem("userType", "norm");
  const div = document.createElement('div');
  ReactDOM.render(<Router><DockDoor/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});

