import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App test', () => {

    it('App renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Hello World renders', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('i').text()).toBe('Hello World');
    })
})
