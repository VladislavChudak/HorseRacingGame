import { mount } from '@vue/test-utils';
import SchedulePanel from '@/components/tables/SchedulePanel.vue';
import { createStore } from 'vuex';

describe('SchedulePanel.vue', () => {
  it('renders schedule with races', () => {
    const store = createStore({
      modules: {
        races: {
          namespaced: true,
          state: () => ({
            raceSchedule: [
              {
                id: 1,
                distance: 1200,
                horses: [{ id: 1, name: 'Horse A', condition: 80 }],
              },
            ],
          }),
        },
      },
    });

    const wrapper = mount(SchedulePanel, {
      global: {
        plugins: [store],
      },
    });

    const title = wrapper.find('.race-table__header');

    expect(title.text()).toContain('Lap 1 - 1200m');
    expect(wrapper.text()).toContain('Horse A');
  });
});
