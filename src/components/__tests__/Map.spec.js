import { describe, it, expect} from 'vitest';
import {mount} from '@vue/test-utils';
import Map from '../Map.vue';


describe('Map.vue Test', () => {
    it('mounts and renders correctly', () => {
        const wrapper = mount(Map);
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.find('.mapContainer')).toBeTruthy();
        expect(wrapper.findComponent(LMap)).toBeTruthy();
    });
});