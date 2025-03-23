import { mount } from '@vue/test-utils';
import HorseIcon from '@/components/track/HorseIcon.vue';

describe('HorseIcon.vue', () => {
  it('renders with proper transform', () => {
    const wrapper = mount(HorseIcon, {
      props: {
        progress: 50,
        trackWidth: 200,
      },
    });

    expect(wrapper.attributes('style')).toContain('transform: translateX(100px)');
  });
});
