// Composables
import { createRouter, createWebHistory } from "vue-router";
import { supabase } from "../supabaseClient";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "Explore",
        component: () => import("@/views/Explore.vue"),
      },
      {
        path: "/explore",
        name: "Explore",
        component: () => import("@/views/Explore.vue"),
      },
      {
        path: "/favorites",
        name: "Favorites",
        component: () => import("@/views/Favorites.vue"),
      },
      {
        path: "/account",
        name: "Account",
        component: () => import("@/views/Account.vue"),
      },
    ],
  },

  {
    path: "/auth",
    name: "Auth",
    component: () => import("@/views/Auth.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const { data } = await supabase.auth.getSession();
  const user = data?.session?.user;
  if (requiresAuth && !user) {
    // uncomment to go to auth when not logged in
    next("/auth");
  } else if (to.path === "/auth" && user) {
    next("/");
  } else {
    next();
  }
});

export default router;
