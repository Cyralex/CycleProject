import {describe, it, expect} from 'vitest';
import {shallowMount} from '@vue/test-utils';
import RouteViewMap from '../routeview/RouteViewMap.vue';

describe('RouteViewMap.vue test', () => {
    it('renders without errors', () =>{
        const wrapper = shallowMount(RouteViewMap);
        expect(wrapper.exists()).toBeTruthy();
    })
})