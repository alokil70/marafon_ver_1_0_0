<template>
    <div class="m-catalog-item">
        <img class="m-catalog-item__img" :src="imageName()" alt="">
        <p class="m-catalog-item__name">{{product.productName}}</p>
        <p class="m-catalog-item__price">{{product.price}} Р</p>
        <button
                class="m-catalog-item__add_to_cart_btn"
                @click="addToCartBtn"
        >Add
        </button>
    </div>
</template>

<script>
    import {URL} from "../../const";

    export default {
        name: "m-catalog-item",
        props: {
            product: {
                type: Object,
                default() {
                    return undefined
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            addToCartBtn() {
                this.$emit('addToCart', this.product)
            },
            imageName() {
                return URL + '/uploads/' + this.product.imageName
            }
        }
    }
</script>

<style lang="scss" scoped>
    .m-catalog-item {
        flex-basis: 45%;
        box-shadow: 0 0 20px #717171;
        padding: 0;
        margin-bottom: $margin * 2;

        &__img {
            max-width: 400px;
        }
    }
</style>
