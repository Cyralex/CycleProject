import { describe, it, expect, } from 'vitest'
import {shallowMount } from '@vue/test-utils'
import Map from '../Map.vue'
import vue from '@vitejs/plugin-vue'


describe('Map.vue Test', () => {
    it('renders without errors', () => {
        const wrapper = shallowMount(Map);
        expect(wrapper.exists()).toBeTruthy()
    })
})