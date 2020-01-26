import React from 'react';
import { mount } from 'enzyme';
import PageLayout from './PageLayout';

describe('PageLayout', () => {

    const wrapper = mount(<PageLayout/>);
    const instance = wrapper.instance();

    it('shoulld render without failure', () => {
        expect(instance).toBeTruthy();
    })
});
