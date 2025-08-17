import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/HomePage/Index/Main.vue";
import Services from "../pages/Services/Index/Main.vue";
import Gallery from "../pages/Gallery/Index/Main.vue";
import Barbers from "../pages/Team/Index/Main.vue";
import Contact from "../pages/Contact/Index/Main.vue";
import NoPage from "../pages/NoPage/Index/Main.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/services",
      name: "services",
      component: Services,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: Gallery,
    },
    {
      path: "/barbers",
      name: "barbers",
      component: Barbers,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
});

export default router;
