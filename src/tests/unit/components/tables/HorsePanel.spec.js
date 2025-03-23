import { mount } from '@vue/test-utils';
import HorsePanel from '@/components/tables/HorsePanel.vue';
import { createStore } from 'vuex';

describe('HorsePanel.vue', () => {
  const store = createStore({
    modules: {
      horses: {
        namespaced: true,
        state: () => ({
          horses: [{ id: 1, name: 'Horse 1', condition: 90, color: '#123456' }],
        }),
      },
    },
  });

  it('renders horse list', () => {
    const wrapper = mount(HorsePanel, {
      global: { plugins: [store] },
    });

    expect(wrapper.text()).toContain('Horse 1');
  });
});
