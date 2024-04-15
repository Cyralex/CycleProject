import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import NavBar from "../nav/NavBar.vue";

describe("NavBar.vue test", () => {
  // check that component renders correctly
  it("renders without errors", () => {
    const wrapper = mount(NavBar);
    expect(wrapper.exists()).toBeTruthy();
  });

  // check for correct number of links
  // navbar and hamburger menu
  it("renders links correctly", () => {
    const wrapper = mount(NavBar);
    const links = wrapper.findAll("v-btn");
    expect(links.length).toBe(6);
  });

  // check NavBar has correct links
  it("links array contains correct routes", () => {
    const wrapper = mount(NavBar);
    const links = wrapper.vm.links;
    links.forEach((link, index) => {
      expect(link.route).toBe(["/", "/about", "/routesuggestion"][index]);
    });
  });

  // check that text for links is correct
  it("links array contains correct text", () => {
    const wrapper = mount(NavBar);
    const links = wrapper.vm.links;

    links.forEach((link, index) => {
      expect(link.text).toBe(["Home", "About", "Route Suggestion"][index]);
    });
  });
});
