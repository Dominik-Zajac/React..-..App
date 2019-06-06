import React from 'react';
import ReactDOM from 'react-dom';
import Order from './Order';
import {
    shallow
} from 'enzyme';
import '../setupTests';

describe('Order tests', () => {

    it('Order renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(< Order />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Snapshot matches', () => {
        const wrapper = shallow(< Order />);
        expect(wrapper).toMatchSnapshot();
    })
})