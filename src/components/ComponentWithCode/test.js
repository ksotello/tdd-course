import React from 'react';
import { mount } from 'enzyme';

import { ComponentWithCode } from '.';

describe('<ComponentWithCode />', () => {
  let wrapper;

  const user = {
    name: 'Jimmy',
    accountNumber: '1234',
    accountName: 'Jimmy\'s Account',
    accountActive: true,
  };

  afterEach(() => {
    wrapper && wrapper.unmount();
    wrapper = null;
  });

  it('should mount without issue', done => {
    wrapper = mount(<ComponentWithCode user={user} />);
    expect(wrapper.exists()).toBe(true);
    done();
  });

  it('should display that', done => {
    wrapper = mount(<ComponentWithCode user={user} hasThat />);
    expect(wrapper.render().text()).toMatch(new RegExp('This user has that'));
    expect(wrapper.render().text()).not.toMatch(new RegExp('This user has this'));
    done();
  });

  it('should display this', done => {
    wrapper = mount(<ComponentWithCode user={user} hasThis />);
    expect(wrapper.render().text()).toMatch(new RegExp('This user has this'));
    expect(wrapper.render().text()).not.toMatch(new RegExp('This user has that'));
    done();
  });

  it('should display this and that', done => {
    wrapper = mount(<ComponentWithCode user={user} hasThis hasThat />);
    expect(wrapper.render().text()).toMatch(new RegExp('This user has this'));
    expect(wrapper.render().text()).toMatch(new RegExp('This user has that'));
    done();
  });
});