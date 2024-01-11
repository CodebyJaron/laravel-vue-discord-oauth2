import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";

import App from "./App.vue";

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: "auth",
            path: "/",
            component: () => import("./Auth.vue"),
            meta: {
                auth: false,
            },
        },
        {
            name: "dashboard",
            path: "/dashboard",
            component: () => import("./Dashboard.vue"),
            meta: {
                auth: true,
            },
        },
    ],
});

router.beforeEach(async (to, from, next) => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token && localStorage.getItem("token") !== token) {
        localStorage.setItem("token", token);
    }

    if (to.meta.auth) {
        try {
            await axios.get("/api/me", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            next();
        } catch (error) {
            next({ name: "auth" });
        }
    } else {
        next();
    }
});

app.use(router);
app.mount("#app");
