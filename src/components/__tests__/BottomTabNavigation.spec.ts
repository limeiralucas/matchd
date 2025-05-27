import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import BottomTabNavigation from '../BottomTabNavigation.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
    { path: '/about', name: 'about', component: { template: '<div>About</div>' } },
    { path: '/profile', name: 'profile', component: { template: '<div>Profile</div>' } },
  ],
});

describe('BottomTabNavigation', () => {
  it('renders properly', () => {
    const wrapper = mount(BottomTabNavigation, {
      global: {
        plugins: [router],
      },
    });
    const icons = wrapper.findAll('svg');
    expect(icons).toHaveLength(3);
    expect(wrapper.html()).toContain('class="tab-icon"');
  });

  it('has correct number of tab items', () => {
    const wrapper = mount(BottomTabNavigation, {
      global: {
        plugins: [router],
      },
    });
    const tabItems = wrapper.findAll('.tab-item');
    expect(tabItems).toHaveLength(3);
  });

  it('has correct router links', () => {
    const wrapper = mount(BottomTabNavigation, {
      global: {
        plugins: [router],
      },
    });
    const links = wrapper.findAll('a');
    expect(links[0].attributes('href')).toBe('/');
    expect(links[1].attributes('href')).toBe('/about');
    expect(links[2].attributes('href')).toBe('/profile');
  });
});
