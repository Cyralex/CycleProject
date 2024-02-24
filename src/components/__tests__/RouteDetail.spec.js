import {describe, it, expect} from 'vitest';
import {shallowMount} from '@vue/test-utils';
import RouteDetail from '../routeview/RouteDetail.vue';

describe('RouteDetail.vue test', () => {
    it('renders without errors', () =>{
        const wrapper = shallowMount(RouteDetail);
        expect(wrapper.exists()).toBeTruthy();
    })
})