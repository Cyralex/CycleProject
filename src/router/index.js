import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RouteView from "../views/RouteView.vue";
let authorized = false;
let checkSession = async () => {
  try {
    let response = await fetch(
      `${process.env.VUE_APP_BASE_URL}/a1/user/checksession`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ check: "session" }),
      }
    );
    response = await response.json();
    if (response.message === "passed") {
      authorized = true;
    } else {
      authorized = false;
      // throw new Error("error checking session");
    }
  } catch (error) {
    console.error(error, "caught err");
    authorized = false;
  }
};
const routes = [
  {
    path: "/route/:id",
    name: "Route",
    component: RouteView,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
  {
    path: "/edit",
    name: "Edit Routes",
    meta: {
      requiresAuth: true,
    },
    component: function () {
      return import(
        /* webpackChunkName: "edit" */ "../views/EditRouteView.vue"
      );
    },
  },

  {
    path: "/login",
    name: "Login",
    component: function () {
      return import(/* webpackChunkName: "login" */ "../views/LoginView.vue");
    },
  },
  {
    path: "/forgot",
    name: "ForgotPW",
    component: function () {
      return import(
        /* webpackChunkName: "forgot" */ "../views/ForgotPWView.vue"
      );
    },
  },

  {
    path: "/routesuggestion",
    name: "RouteSuggestion",
    component: function () {
      return import(
        /* webpackChunkName: "RouteSuggestion" */ "../views/RouteSuggestion.vue"
      );
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: function () {
      return import(/* webpackChunkName: "404" */ "../views/404View.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    authorized = false;
    await checkSession();
    if (authorized) {
      next();
    } else {
      alert("unauthorized");
      next("/");
    }
  } else {
    next();
  }
});
export default router;
