import dashboard from '@/components/Dashboard.vue';
import { mount, shallowMount } from '@vue/test-utils'

describe('Dashboard.vue', () => {

    it('renders a vue instance', () => {
        expect(shallowMount(dashboard).isVueInstance()).toBe(true)
    })

    const wrapper = mount(dashboard)
    it('has an h2', () => {
        expect(wrapper.contains('h2')).toBe(true)
    })
})