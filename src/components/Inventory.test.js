import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './Inventory';
import { shallow } from 'enzyme';
import '../setupTests';

describe('Inventory tests', () => {

    it('Inventory renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Inventory />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Inventory renders', () => {
        const wrapper = shallow(<Inventory />);
        expect(wrapper.find('div').text()).toBe('Inwentarz');
    })
})