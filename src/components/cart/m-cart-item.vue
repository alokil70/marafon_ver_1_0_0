<template>
    <div class="m-cart-item">
        <span>{{cart_item.productName}}</span>
        <div class="m-cart-item__quantity">
            <span>
                <button @click="decrementItem">-</button>
                {{cart_item.quantity}}
                <button @click="incrementItem">+</button>
            </span>
        </div>
        <button @click="deleteFromCart">Del</button>
    </div>
</template>

<script>
    export default {
        name: "m-cart-item",
        props: {
            cart_item: Object
        },
        mounted() {
            this.$set(this.cart_item, 'quantity', 1)
        },
        methods: {
            deleteFromCart() {
                this.$emit('deleteFromCart')
            },
            decrementItem() {
                this.$emit('decrement')
            },
            incrementItem() {
                this.$emit('increment')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .m-cart-item {
        display: flex;
        justify-content: space-around;

        &__quantity {
            text-align: center;


        }
    }
</style>
