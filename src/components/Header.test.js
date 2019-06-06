import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';
import '../setupTests';

describe('Header tests', () => {

    it('Header renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Snapshot matches', () => {
        const wrapper = shallow(< Header />);
        expect(wrapper).toMatchSnapshot();
    })

    it('Header changes text according to state', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('h1').text()).toBe('Black Books');
        wrapper.setState({
            bookName: 'White Books'
        })
        expect(wrapper.find('h1').text()).toBe('White Books');
    })

    it('Header state changes after clicking on header div', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.state().bookName).toBe('Black Books');
        wrapper.find('.header').simulate('click');
        expect(wrapper.state().bookName).toBe('White Books');
    })
})