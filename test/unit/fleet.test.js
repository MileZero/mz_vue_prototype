import fleet from '@/components/Fleet.vue';
import { shallowMount } from '@vue/test-utils'

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(fleet), {
        propsData: {},
        mocks: {},
        stubs: {},
        methods: {},
    };
})

afterEach(() => {
    wrapper.destroy();
})

describe('Fleet.vue', () => {
    test('is a Vue instance', () => {
        expect(shallowMount(fleet).isVueInstance()).toBe(true)
    })
})