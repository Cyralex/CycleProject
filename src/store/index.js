import { defineStore } from "pinia";

export const useRouteStore = defineStore("routeStore", {
  state: () => ({ routes: [] }),

  getters: {
    //pre computed values ex: all "dirt" routes
    getRoutes() {
      return this.routes;
    },
    getRoutebyID: (state) => {
      return (id) => {
        return state.routes.find((r) => r.id == id);
      };
    },
  },

  actions: {
    //methods to mutate data
    async updateRoute(updatedRoute) {
      //TODO: make this function work.. untested
      console.log(updatedRoute, "in store");
      //take in whatever attributes are being updated, leave rest unchanged, put back into state

      let response = await fetch(
        `${process.env.VUE_APP_BASE_URL}/a1/geo/${updatedRoute.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedRoute),
        }
      );
      response = await response.json();
    },
    async addRoute(routeToAdd) {
      //tested
      this.routes.push(routeToAdd);

      let response = await fetch(`${process.env.VUE_APP_BASE_URL}/a1/geo/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(routeToAdd),
      });
      response = await response.json();
      this.getRoutesInit();
      return response;
    },
    async deleteRoute(id) {
      //tested
      //this.routes.remove((r) => r.id == id)//to update routes array in state
      let response = await fetch(
        `${process.env.VUE_APP_BASE_URL}/a1/geo/${id}`,
        {
          method: "DELETE",
        }
      );
      response = await response.json();
      this.routes = this.routes.filter((r) => {
        //update route list
        //console.log(this.routes)
        return r.id !== Number(response.id);
      });
      console.log(this.routes, "del route", id);
    },
    async getRoutesInit() {
      //tested
      console.log(process.env.VUE_APP_API_URL);
      try {
        let response = await fetch(`${process.env.VUE_APP_BASE_URL}/v1/geo`); //eventually change to env variable
        response = await response.json();
        this.routes = response.routes.map((r) => {
          return {
            ...r,
            route: JSON.parse(r.route),
          };
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
});
