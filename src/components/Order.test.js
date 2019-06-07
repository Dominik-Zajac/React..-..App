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
        const order = [];
        ReactDOM.render(< Order order={order} />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Snapshot matches', () => {
        const order = [];
        const wrapper = shallow(< Order order={order} />);
        expect(wrapper).toMatchSnapshot();
    })
})