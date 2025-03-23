import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import RaceTrack from '@/components/track/RaceTrack.vue';

describe('RaceTrack.vue', () => {
  const mockRace = {
    id: 1,
    distance: 1200,
    horses: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `Horse ${i + 1}`,
      progress: 0,
      color: '#000000',
    })),
  };

  const store = createStore({
    modules: {
      races: {
        namespaced: true,
        getters: {
          currentRace: () => mockRace,
        },
        state: () => ({
          raceSchedule: [mockRace, mockRace, mockRace],
          raceStarted: true,
        }),
      },
    },
  });

  it('renders all horses in current race', () => {
    const wrapper = mount(RaceTrack, {
      global: { plugins: [store] },
    });

    const horseIcons = wrapper.findAll('.race-lane__row');
    expect(horseIcons.length).toBe(10);
  });
});
