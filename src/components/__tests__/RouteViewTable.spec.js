import {describe, it, expect} from 'vitest';
import {shallowMount} from '@vue/test-utils';
import RouteViewTable from '../routeview/RouteViewTable';

describe('RouteViewTable.vue test', () =>{
    it('renders without errors', ()=>{
        const wrapper = shallowMount(RouteViewTable);
        expect(wrapper.exists()).toBeTruthy();
    })
})