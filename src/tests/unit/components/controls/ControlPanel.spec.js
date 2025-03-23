import { mount } from '@vue/test-utils';
import ControlPanel from '@/components/controls/ControlPanel.vue';
import { createStore } from 'vuex';

describe('ControlPanel.vue', () => {
  const mockDispatch = vi.fn();

  const store = createStore({
    modules: {
      horses: {
        namespaced: true,
        state: () => ({
          horses: Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            name: `Horse ${i + 1}`,
            condition: 100,
            color: '#000000',
          })),
        }),
      },
      races: {
        namespaced: true,
        state: () => ({
          racesStarted: false,
          raceStatus: false,
        }),
        actions: {
          initializeGame: mockDispatch,
        },
      },
    },
  });

  it('renders buttons and dispatches actions', async () => {
    const wrapper = mount(ControlPanel, {
      global: { plugins: [store] },
    });

    await wrapper.find('button').trigger('click');
    expect(mockDispatch).toHaveBeenCalled();
  });
});
