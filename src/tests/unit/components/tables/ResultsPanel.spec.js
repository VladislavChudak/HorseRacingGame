import { mount } from '@vue/test-utils';
import ResultsPanel from '@/components/tables/ResultsPanel.vue';
import { createStore } from 'vuex';

describe('ResultsPanel.vue', () => {
  const store = createStore({
    modules: {
      results: {
        namespaced: true,
        state: () => ({
          results: [{ raceId: 1, placements: [{ id: 1, name: 'Horse 1', place: 1 }] }],
        }),
      },
    },
  });

  it('renders race results', () => {
    const wrapper = mount(ResultsPanel, {
      global: { plugins: [store] },
    });

    expect(wrapper.text()).toContain('Horse 1');
    expect(wrapper.text()).toContain('1');
  });
});
