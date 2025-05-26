import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AboutView from '../AboutView.vue';

describe('AboutView', () => {
  it('renders properly', () => {
    const wrapper = mount(AboutView);
    expect(wrapper.text()).toContain('About');
    expect(wrapper.text()).toContain('This is the about page');
  });

  it('has correct heading', () => {
    const wrapper = mount(AboutView);
    const heading = wrapper.find('h1');
    expect(heading.text()).toBe('About');
  });

  it('has about class', () => {
    const wrapper = mount(AboutView);
    expect(wrapper.find('.about').exists()).toBe(true);
  });
});
