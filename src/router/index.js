import { createWebHistory, createRouter } from "vue-router";
import Hello from "../components/Hello";
import About from "../components/About";
import Taula from "../components/Taula";
import Formulari from "../components/Formulari";
import Oferta from "../components/Oferta";

const routes = [
  {
    path: "/",
    name: "Hello",
    component: Hello,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/ofertes",
    name: "Taula",
    component: Taula,
  },
  {
    path: "/formulari",
    name: "Formulari",
    component: Formulari,
  },
  {
    path: "/oferta:id",
    name: "Oferta",
    component: Oferta,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;