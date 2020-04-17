<template>
    <div class="m-cart">
        <router-link :to="{name: 'catalog'}">
            <div class="m-cart__link_to_catalog">Catalog</div>
        </router-link>
        <h1>Cart</h1>

        <m-cart-item
                v-for="(item, index) in CART"
                :key="index"
                :cart_item="item"
                @deleteFromCart="deleteFromCart(index)"
        />
    </div>
</template>

<script>
    import MCartItem from "./m-cart-item"
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "m-cart",
        components: {MCartItem},
        props: {},
        methods: {
            ...mapActions(['DELETE_FROM_CART']),
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index)
            }
        },
        computed: {
            ...mapGetters(['CART'])
        }
    }
</script>

<style lang="scss" scoped>
    .m-cart {

        &__link_to_catalog {
            position: absolute;
            right: 10px;
     }
    }

</style>
