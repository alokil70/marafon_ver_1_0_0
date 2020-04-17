<template>
    <div class="m-catalog">
        <router-link :to="{name: 'cart'}">
            <div class="m-catalog__link_to_cart">Cart: {{CART.length}}</div>
        </router-link>

        <h1>Catalog</h1>

        <div class="m-catalog__list">
            <m-catalog-item
                    v-for="product in PRODUCTS"
                    :key="product.id"
                    :product="product"
                    @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
    import MCatalogItem from "./m-catalog-item";
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "m-catalog",
        components: {MCatalogItem},
        data() {
            return {}
        },
        computed: {...mapGetters(['PRODUCTS', 'CART'])},
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API', 'GET_CATEGORY_FROM_API', 'ADD_TO_CART'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data)
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
            this.GET_CATEGORY_FROM_API()
        }
    }
</script>

<style lang="scss">
    .m-catalog {
        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
        }
        &__link_to_cart {
            position: absolute;
            right: 10px;
        }
    }
</style>
