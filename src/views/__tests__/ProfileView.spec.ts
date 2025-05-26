import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ProfileView from '../ProfileView.vue';

describe('ProfileView', () => {
  it('renders properly', () => {
    const wrapper = mount(ProfileView);
    expect(wrapper.text()).toContain('Profile');
    expect(wrapper.text()).toContain('This is the profile page');
  });

  it('has correct heading', () => {
    const wrapper = mount(ProfileView);
    const heading = wrapper.find('h1');
    expect(heading.text()).toBe('Profile');
  });

  it('has profile class', () => {
    const wrapper = mount(ProfileView);
    expect(wrapper.find('.profile').exists()).toBe(true);
  });
});
