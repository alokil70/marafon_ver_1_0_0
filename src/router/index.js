import Vue from "vue";
import VueRouter from "vue-router";

import MCatalog from '../components/catalog/m-catalog';
import MCart from '../components/cart/m-cart';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: MCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: MCart,
            props: true
        }
    ]
})

export default router;
