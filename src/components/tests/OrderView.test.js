import React from 'react';
import OrderView from '../OrderView';
import { shallow } from 'enzyme';

describe('Order view tests', () => {

    it('Snapshot matches', () => {
        const book = {
            name: 'Book title'
        }
        const wrapper = shallow(<OrderView book={book} />);
        expect(wrapper).toMatchSnapshot();
    })

})