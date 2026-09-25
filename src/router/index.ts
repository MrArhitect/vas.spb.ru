import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "MainView",
      path: "/",
      component: () => import("@/views/MainView.vue"),
      children: [
        {
          name: "MainPage",
          path: "",
          component: () => import("@/pages/MainPage.vue"),
        },
      ],
    },
  ],
});

export default router;
