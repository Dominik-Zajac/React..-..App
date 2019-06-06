import React from 'react';
import ReactDOM from 'react-dom';
import AdminPanel from './AdminPanel';
import { shallow } from 'enzyme';
import '../setupTests';

describe('AdminPanel tests', () => {

    it('AdminPanel renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AdminPanel />, div);
        ReactDOM.unmountComponentAtNode(div)
    })

    it('AdminPanel renders', () => {
        const wrapper = shallow(<AdminPanel />);
        expect(wrapper.find('div').text()).toBe('Panel Administratora');
    })
})