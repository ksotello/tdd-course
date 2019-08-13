import React from 'react';
import { mount } from 'enzyme';

import BaseInput from '.';

describe('The BaseInput component', () => {
  it('should mount without issue', done => {
    const wrapper = mount(<BaseInput />);
    expect(wrapper.exists()).toBe(true);
    done();
  });

  it('should display an inout', done => {
    const wrapper = mount(<BaseInput />);
    expect(wrapper.find('input').length).toBe(1);
    done();
  });
});
