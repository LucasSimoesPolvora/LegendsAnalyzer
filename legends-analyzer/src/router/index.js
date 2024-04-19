import { createWebHistory, createRouter } from "vue-router";
import LobbyView from "@/Views/LobbyView.vue";
import LoginView from "@/Views/LoginView.vue";
import SignupView from "@/Views/SignupView.vue";

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
    },
    {
        path: '/signup',
        name: 'Signup',
        component: SignupView
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;