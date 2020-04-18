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
                @decrement="decrement(index)"
                @increment="increment(index)"
        />
        <div class="m-cart__total">
            <span>Total:</span>
            <strong>{{totalCost}} Р.</strong>
        </div>
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
            ...mapActions(['DELETE_FROM_CART', 'INCREMENT_ITEM_CART', 'DECREMENT_ITEM_CART']),
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index)
            },
            increment(index) {
                this.INCREMENT_ITEM_CART(index)
            },
            decrement(index) {
                this.DECREMENT_ITEM_CART(index)
            }
        },
        computed: {
            ...mapGetters(['CART']),
            totalCost() {
                let result = []
                if (this.CART.length) {
                    for (let item of this.CART) {
                        result.push(item.price * item.quantity)
                    }
                    result = result.reduce((sum, el) => sum + el)
                    return result
                }
                return 0
            }
        }
    }
</script>

<style lang="scss" scoped>
    .m-cart {

        &__link_to_catalog {
            position: absolute;
            right: 10px;
        }
        &__total {
            display: flex;
            justify-content: center;
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            padding: $padding * 2;
            font-size: 20px;
            background-color: #ff5c18;
            color: white;

        }
    }

</style>
