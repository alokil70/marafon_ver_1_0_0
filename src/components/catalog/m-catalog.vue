<template>
    <div class="m-catalog">
        <m-category-select
                :options="options"
                :selected="selected"
                @selectOption="selectOption"
        />
        <m-btn title="Press"/>
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
    import MCategorySelect from "../m-category-select";
    import MBtn from "../m-btn";

    export default {
        name: "m-catalog",
        components: {MBtn, MCategorySelect, MCatalogItem},
        data() {
            return {
                options: [
                    {name: 'option 1', value: 1},
                    {name: 'option 2', value: 2},
                    {name: 'option 3', value: 3},
                    {name: 'option 4', value: 4},
                    {name: 'option 5', value: 5},
                ],
                selected: 'Выбрать'
            }
        },
        computed: {
            ...mapGetters(['PRODUCTS', 'CART'])
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API', 'GET_CATEGORY_FROM_API', 'ADD_TO_CART'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data)
                console.log([2, 4, 8, 9, 1, 3, 5, 7, 6].filter(i => !(i % 2)).reduceRight((accum, i) => accum + Math.sqrt(i), 0))
            },
            selectOption(option) {
                this.selected = option.name
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
        h1 {
            padding-left: $padding;
        }

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
