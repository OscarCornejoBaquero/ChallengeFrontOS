import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
        },
        {
            path: '/TicketFinder',
            name: 'TicketFinder',
            component: () => import(/* webpackChunkName: "TicketFinder" */ './views/TicketFinder.vue')
        },
        {
            path: '/SearchResults',
            name: 'SearchResults',
            component: () => import(/* webpackChunkName: "SearchResults" */ './views/SearchResults.vue')
        }
    ]
})