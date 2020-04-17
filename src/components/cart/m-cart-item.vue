<template>
    <div class="m-cart-item">
        <p>{{cart_item.productName}}</p>
        <div class="m-cart-item__quantity">
            {{cart_item.quantity}}
        </div>
        <button @click="deleteFromCart">Del</button>
    </div>
</template>

<script>
    export default {
        name: "m-cart-item",
        props: {
            cart_item: {
                type: Object,
                default() {
                    return undefined
                }
            }
        },
        mounted() {
            this.$set(this.cart_item, 'quantity', 1)
        },
        methods: {
            deleteFromCart() {
                this.$emit('deleteFromCart')
            }
        }
    }
</script>

<style lang="scss" scoped>
.m-cart-item {
    display: flex;
    justify-content: space-between;
}
</style>
