import {describe, it, expect} from 'vitest';
import {shallowMount } from '@vue/test-utils';
import Footer from '../nav/NavBar.vue'

describe('Footer.vue test', () => {
    it('renders without errors', () => {
        const wrapper = shallowMount(Footer);
        expect(wrapper.exists()).toBeTruthy();
    })
})