import {describe, it, expect, vi} from 'vitest';
import {shallowMount} from '@vue/test-utils';
import {mount} from '@vue/test-utils';
import Footer from '../nav/Footer.vue'


describe('Footer.vue test', () => {

    // test if componenet renders
    it('renders without errors', () => {
        const wrapper = shallowMount(Footer);
        expect(wrapper.exists()).toBeTruthy();
    });

    // check for correct number of links 
    it('renders links correctly', () => {
        const wrapper = mount(Footer);
        const links = wrapper.findAll('v-btn');
        expect(links.length).toBe(3);   
    });

    // check for correct links 
    it('links array contains expected "to" values', () => {
        const wrapper = mount(Footer);
    
        // Access the links data
        const links = wrapper.vm.links;
    
        // Assert the "to" property values for each link
        links.forEach((link, index) => {
        expect(link.to).toBe([
            '/', 
            '/about', 
            'https://bolivar.mo.us/contact-us/',
        ][index]);
        });
    });

    // check for correct name of link 
    it('links array contains expected "name" values', () => {
        const wrapper = mount(Footer);
    
        // Access the links data
        const links = wrapper.vm.links;
    
        // Assert the "to" property values for each link
        links.forEach((link, index) => {
        expect(link.name).toBe([
            'Home', 
            'About', 
            'Contact Us',
        ][index]);
        });
    });   

   
});