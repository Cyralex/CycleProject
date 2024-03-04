import {describe, it, expect} from 'vitest';
import {shallowMount, mount} from '@vue/test-utils';
import RouteDetail from '../routeview/RouteDetail.vue';

describe('RouteDetail.vue test', () => {
    it('renders without errors', () =>{
        const wrapper = shallowMount(RouteDetail);
        expect(wrapper.exists()).toBeTruthy();
    });

    
        it('renders the description correctly when provided with a route object', () => {
          const route = { desc: 'Sample description' };
          const wrapper = mount(RouteDetail, {
            propsData: {
              route: route
            }
          });
      
          expect(wrapper.find('.desc').exists()).toBe(true);
          expect(wrapper.find('.desc p').text()).toBe('Sample description');
        });
      
        it('handles missing or undefined descriptions gracefully', () => {
          const wrapper = mount(RouteDetail, {
            propsData: {
              route: null
            }
          });
      
          expect(wrapper.find('.desc').exists()).toBe(true);
          expect(wrapper.find('.desc p').text()).toBe('');
        });
      


});