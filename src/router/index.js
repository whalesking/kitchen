import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        meta: {
            title: '胡闹厨房'
        },
        component: () => import("@/views/games/guess"),
    },
    {
        path: "/guess",
        meta: {
            title: '胡闹厨房'
        },
        component: () => import("@/views/games/guess"),
    },

];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});


export default router;
