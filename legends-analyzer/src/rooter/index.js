import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('../Views/LobbyView.vue')
    }
]

const router = createRouter({
    history: createMemoryHistory(import.meta.env.BASE_URL),
    routes
});

export default router;