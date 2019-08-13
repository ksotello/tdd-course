import React from 'react';
import { mount } from 'enzyme';

import { UserInfoContainer } from '.';

describe('<UserInfoContainer />', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.unmount();
    wrapper = null;
  });

  it('should mount without issue', done => {
    wrapper = mount(<UserInfoContainer />);
    expect(wrapper.exists()).toBe(true);
    done();
  });

  it('should display the user info container if the user exists', done => {
    wrapper = mount(<UserInfoContainer user={{ name: 'Jimmy' }} />);
    expect(wrapper.render().text()).toBe('Jimmy');
    done();
  });

  it('should not display the user information if the user does not exist', done => {
    wrapper = mount(<UserInfoContainer />);
    expect(wrapper.find('div').length).toBe(0);
    done();
  });
});
