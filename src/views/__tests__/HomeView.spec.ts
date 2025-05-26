import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HomeView from '../HomeView.vue';

describe('HomeView', () => {
  it('renders properly', () => {
    const wrapper = mount(HomeView);
    expect(wrapper.text()).toContain('Welcome to Matchd');
    expect(wrapper.text()).toContain('This is the home page of your tab navigation app');
  });

  it('has correct heading', () => {
    const wrapper = mount(HomeView);
    const heading = wrapper.find('h1');
    expect(heading.text()).toBe('Welcome to Matchd');
  });

  it('has home class', () => {
    const wrapper = mount(HomeView);
    expect(wrapper.find('.home').exists()).toBe(true);
  });
});
