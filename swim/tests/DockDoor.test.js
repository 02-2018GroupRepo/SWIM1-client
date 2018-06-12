import React from 'react';
import DockDoor from '../src/Component/DockDoor';
import {mount} from 'enzyme';

describe('<DockDoor />', () => {
	it('renders 1 <DockDoor /> component', () => {
		const component = mount(<DockDoor />);
		expect(component).toHaveLength(1);
	});
});