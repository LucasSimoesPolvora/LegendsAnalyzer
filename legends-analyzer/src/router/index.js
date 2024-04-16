import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('../views/LobbyView.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/LoginView.vue')
    }
]

const router = createRouter({
    history: createMemoryHistory(import.meta.env.BASE_URL),
    routes
});

export default router;