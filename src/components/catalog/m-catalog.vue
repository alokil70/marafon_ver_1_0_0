<template>
    <div class="m-catalog">
        <m-category-select
                :options="CATEGORY"
                :selected="selected"
                @selectOption="sortByCategoryName"
        />
        <router-link :to="{name: 'cart'}">
            <div class="m-catalog__link_to_cart">Cart: {{CART.length}}</div>
        </router-link>

        <h1>Catalog</h1>

        <div class="m-catalog__list">
            <m-catalog-item
                    v-for="product in filtered"
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

    export default {
        name: "m-catalog",
        components: {MCategorySelect, MCatalogItem},
        data() {
            return {
                selected: 'Выбрать',
                sortedProducts: []
            }
        },
        computed: {
            ...mapGetters(['PRODUCTS', 'CART', 'CATEGORY']),
            filtered() {
                if (this.sortedProducts.length) {
                    return this.sortedProducts
                }else {
                    return this.PRODUCTS
                }
            }
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API', 'GET_CATEGORY_FROM_API', 'ADD_TO_CART'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data)
            },
            sortByCategoryName(option) {
                this.selected = option.categoryName
                this.sortedProducts = []
                this.PRODUCTS.map(item => {
                    if (item.CategoryId === option.id) {
                        this.sortedProducts.push(item)
                    }

                })
            },
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
