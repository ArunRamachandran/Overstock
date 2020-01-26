import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
    const wrapper = shallow(<App/>);
    const instance = wrapper.instance();

    it('should render the application', () => {
        expect(instance).toBeTruthy();
    })
});
