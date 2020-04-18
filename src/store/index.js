import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {URL} from "../const";

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        products: [],
        category: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, payload) => state.products = payload,
        SET_CATEGORY_TO_STATE: (state, payload) => state.category = payload,
        ADD_TO_CART: (state, payload) => {
            if (state.cart.length) {
                let isItemExist = false
                state.cart.map(item => {
                    if (item.id === payload.id) {
                        item.quantity++
                        isItemExist = true
                    }
                })
                if (!isItemExist) {
                    state.cart.push(payload)
                }
            } else {
                state.cart.push(payload)
            }
        },
        DELETE_FROM_CART: (state, index) => state.cart.splice(index, 1),
        DECREMENT_ITEM_CART: (state, index) => {
            if (state.cart[index].quantity > 1) state.cart[index].quantity--
        },
        INCREMENT_ITEM_CART: (state, index) => {
            state.cart[index].quantity++
        },
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios(URL + '/api/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data)
                    return products.data
                })
                .catch(error => console.log(error))
        },
        GET_CATEGORY_FROM_API({commit}) {
            return axios(URL + '/api/category', {
                method: "GET"
            })
                .then((category) => {
                    commit('SET_CATEGORY_TO_STATE', category.data)
                    return category.data
                })
                .catch(error => console.log(error))
        },
        ADD_TO_CART({commit}, product) {
            commit('ADD_TO_CART', product)
        },
        DELETE_FROM_CART({commit}, index) {
            commit('DELETE_FROM_CART', index)
        },
        INCREMENT_ITEM_CART({commit}, index) {
            commit('INCREMENT_ITEM_CART', index)
        },
        DECREMENT_ITEM_CART({commit}, index) {
            commit('DECREMENT_ITEM_CART', index)
        },
    },
    getters: {
        PRODUCTS: state => state.products,
        CATEGORY: state => state.category,
        CART: state => state.cart,
    }
})

export default store
