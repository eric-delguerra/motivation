import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fun from "@/views/Fun";
import Serious from "@/views/Serious";
import Metting from "../views/Metting";

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
        path: '/:name', redirect: Home => {
            let url = new URL(window.location.href);
            let parsedUrl = (url.pathname).substring(1).replace(/%20/g," ")
            // console.log(parsedUrl)
            // console.log(window.location.href)
            localStorage.setItem('name', parsedUrl)
            return '/'
        }
    },
    {
        path: '/page/skills',
        name: 'skills',
        component: Fun
    },
    {
        path: '/page/motivation',
        name: 'motivation',
        component: Serious,
    },
    // {
    //     path: '*',
    //     redirect: Home
    // }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
