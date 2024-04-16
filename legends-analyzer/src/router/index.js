import { createWebHistory, createRouter } from "vue-router";
import LobbyView from "@/views/LobbyView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: LobbyView
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;