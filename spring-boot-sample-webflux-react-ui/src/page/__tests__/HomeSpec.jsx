import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Header from '../../../components/header/Header.jsx'

var Home = require('../Home').default.WrappedComponent;

describe('Home', () => {

    let renderWrapper;

    beforeEach(() => {
        renderWrapper = shallow(<Home />);
    });

    it('renders a Navbar', () => {
        expect(renderWrapper.contains(<Header/>)).toBeTruthy();
    });

});