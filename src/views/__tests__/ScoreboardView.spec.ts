import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ScoreboardView from '../ScoreboardView.vue';

describe('ScoreboardView', () => {
  it('renders properly', () => {
    const wrapper = mount(ScoreboardView);
    expect(wrapper.find('.score-box.red')).toBeTruthy();
    expect(wrapper.find('.score-box.blue')).toBeTruthy();
    expect(wrapper.find('.vs')).toBeTruthy();
  });

  it('displays initial scores', () => {
    const wrapper = mount(ScoreboardView);
    const redScore = wrapper.find('.score-box.red .score-value');
    const blueScore = wrapper.find('.score-box.blue .score-value');
    expect(redScore.text()).toBe('0');
    expect(blueScore.text()).toBe('0');
  });

  it('displays player lists', () => {
    const wrapper = mount(ScoreboardView);
    const redTeamPlayers = wrapper.findAll('.red-team li');
    const blueTeamPlayers = wrapper.findAll('.blue-team li');
    expect(redTeamPlayers.length).toBeGreaterThan(0);
    expect(blueTeamPlayers.length).toBeGreaterThan(0);
  });
});
