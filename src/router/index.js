import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fun from "@/views/Fun";
import Serious from "@/views/Serious";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/:name',
        name: 'home',
        component: Home
    },
    {
        path: '/page/Fun',
        name: 'Fun',
        component: Fun
    },
    {
        path: '/page/Serious',
        name: 'Serious',
        component: Serious
    },
    {
        path: '*',
        component: Home
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
