import React from 'react';
import { shallow } from 'enzyme';
import PageLayout from './PageLayout';

describe('PageLayout', () => {

    const wrapper = shallow(<PageLayout/>);
    const instance = wrapper.instance();

    it('shoulld render without failure', () => {
        expect(instance).toBeTruthy();
    })
});
