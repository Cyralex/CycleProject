import {describe, it, expect, beforeEach} from 'vitest';
import {mount} from '@vue/test-utils';
import Map from '../Map.vue';
import { setActivePinia, createPinia } from 'pinia';
import { createApp } from 'vue';

describe('Map.vue test', () => {
    const app = createApp({});
    beforeEach(() =>{
        const pinia = createPinia();
        app.use(pinia);
        setActivePinia(pinia);
    });

    it('renders without errors', () =>{
        const wrapper = mount(Map);
        expect(wrapper.exists()).toBeTruthy();
    })
})