import {createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'
import Movie from './Movie.vue'
import About from './About.vue'
import NotFound from './NotFound'

export default createRouter({
    history: createWebHashHistory(),
    scrollBehavior() {
        return { top: 0 }
    },
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path : '/movie/:movieid',
            component: Movie
        },
        {
            path : '/about',
            component: About
        },
        {
            path : '/:NotFound(.*)',
            component: NotFound
        }

    ]
})