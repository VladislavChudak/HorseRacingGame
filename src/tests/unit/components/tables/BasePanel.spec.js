import { mount } from '@vue/test-utils';
import BasePanel from '@/components/tables/BasePanel.vue';

describe('BasePanel.vue', () => {
  it('renders slot content and title', () => {
    const wrapper = mount(BasePanel, {
      props: { title: 'Test Panel' },
      slots: { default: '<p>Panel content</p>' },
    });

    expect(wrapper.text()).toContain('Test Panel');
    expect(wrapper.html()).toContain('Panel content');
  });
});
