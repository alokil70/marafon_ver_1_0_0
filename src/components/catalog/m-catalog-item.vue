<template>
    <div class="m-catalog-item">
        <img class="m-catalog-item__img" :src="imageName" alt="">
        <div class="m-catalog-item__cardText">
            <p class="m-catalog-item__name">{{product.productName}}</p>
            <p class="m-catalog-item__price">{{product.price}} Р</p>

            <m-btn
                    title="Добавить"
                    :disabled="false"
                    :error="false"
                    @click="addToCartBtn"/>
        </div>
    </div>
</template>

<script>
    import {URL} from "../../const";
    import MBtn from "../m-btn";

    export default {
        name: "m-catalog-item",
        components: {MBtn},
        props: {
            product: Object
        },
        data() {
            return {}
        },
        computed: {
            imageName() {
                return URL + '/uploads/' + this.product.imageName
            }
        },
        methods: {
            addToCartBtn() {
                this.$emit('addToCart', this.product)
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
        &__cardText {
            padding: $padding;
        }
    }
</style>
