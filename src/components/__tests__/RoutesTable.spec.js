import {describe, it, expect} from 'vitest';
import {shallowMount} from '@vue/test-utils';
import RoutesTable from '../RoutesTable.vue';

describe('RouteDetail.vue test', () => {
    it('renders without errors', () =>{
        const wrapper = shallowMount(RoutesTable);
        expect(wrapper.exists()).toBeTruthy();
    })
})