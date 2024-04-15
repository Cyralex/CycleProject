import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { describe, it, vi } from "vitest";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import HomeView from "@/views/HomeView.vue";
import RoutesTable from "@/components/RoutesTable.vue";
import RouteView from "@/views/RouteView.vue";
import RoutePOI from "@/components/routeview/RoutePOI.vue";

describe("Osage Cycling Integration Test", () => {
  it("should navigate to the route and view the points of interest", async () => {
    // Set up the mock Pinia store
    const pinia = createPinia();
    setActivePinia(pinia);

    // Create a mock Vuetify instance
    const vuetify = createVuetify({
      components,
      directives,
    });

    const wrapper = mount(HomeView, {
      global: {
        plugins: [pinia, vuetify],
      },
    });

    // Find the search input field
    const searchInput = wrapper.find('input[type="text"]');
    expect(searchInput.exists()).toBe(true);

    // Enter the search text
    const searchText = "Clinton to Bolivar";
    await searchInput.setValue(searchText);

    // Find the route name link and click it
    const routeLink = wrapper.find("a.route-link");
    await routeLink.trigger("click");

    // Ensure the RouteView component is rendered
    const routeView = wrapper.findComponent(RouteView);
    expect(routeView.exists()).toBe(true);

    // Find the RoutePOI component inside the RouteView
    const routePOI = routeView.findComponent(RoutePOI);
    expect(routePOI.exists()).toBe(true);

    // Restore the original window.URL object
    vi.restoreAllMocks();

    // Destroy the Pinia store
    pinia.dispose();
  });
});
