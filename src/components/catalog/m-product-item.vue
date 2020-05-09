<template>
    <div class="m-product-item">
        <div class="m-product-item__wrapper">
            <div class="product__box">
                <div class="product__top">
                    <div class="product__markers">
                        <div class="markers">
                            <div title="Новинка" class="markers__item markers__item_new"></div>
                            <div title="Острое" class="markers__item markers__item_hot"></div>
                            <div title="Теплое" class="markers__item markers__item_warm"></div>
                        </div>
                    </div>
                </div>
                <div class="product__view">
                    <div class="product__view-container">
                        <div style="transition: opacity 300ms ease-in-out 0s; opacity: 1;">
                            <div class="product__image__box">
                                <img class="product__image"
                                     title="Дорада самбал"
                                     alt="Дорада самбал"
                                     :src="imageName">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product__content"><a class="product__link" href="">
                    <div class="product__head">
                        <div class="product__title">{{product.productName}}</div>
                    </div>
                    <div class="product__info">{{product.description}}
                    </div>
                </a>
                    <div class="product__bottom">
                        <div class="product__price">{{product.price}}<span class="product__currency">руб.</span></div>
                        <div class="product__count">
                            <div class="numeric">
                                <button class="numeric__button numeric__button_minus" type="button">-</button>
                                <div class="numeric__value">0</div>
                                <button class="numeric__button numeric__button_plus" type="button">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import {URL} from "../../const";

    export default {
        name: "m-product-item",
        props: {
            product: {
                type: Object,
                default() {
                }
            }
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

<style scoped>
    .m-product-item {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-weight: 400;
        color: #000;
        font-size: 14px;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        width: 100%;
        box-sizing: border-box;
    }

    .m-product-item__wrapper {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-weight: 400;
        color: #000;
        font-size: 14px;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
    }

    .product__box {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-weight: 400;
        color: #000;
        font-size: 14px;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        position: relative;
        height: 100%;
        display: flex;
    }

    .product__top {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-weight: 400;
        color: #000;
        font-size: 14px;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        z-index: 1;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .product__markers {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-weight: 400;
        color: #000;
        font-size: 14px;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        position: absolute;
        left: 10px;
        top: 10px;
    }

    .markers {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-weight: 400;
        color: #000;
        font-size: 14px;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        background: hsla(0, 0%, 100%, .88);
        border-radius: 20px;
        box-shadow: 0 0 4px rgba(0, 0, 0, .16);
        padding: 4px 8px;
        display: flex;
    }

    .markers__item_new {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-weight: 400;
        color: #000;
        font-size: 14px;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        width: 20px;
        height: 20px;
        position: relative;
        background: url(/_next/static/217b025f20850046c17bd9529e905f8d.png) no-repeat;
        overflow: hidden;
        background-position: 0 -360px;
    }

    .markers__item_hot {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-weight: 400;
        color: #000;
        font-size: 14px;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        width: 20px;
        height: 20px;
        position: relative;
        background: url(/_next/static/217b025f20850046c17bd9529e905f8d.png) no-repeat;
        overflow: hidden;
        background-position: 0 -340px;
        margin-left: 4px;
    }

    .markers__item_warm {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-weight: 400;
        color: #000;
        font-size: 14px;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        width: 20px;
        height: 20px;
        position: relative;
        background: url(/_next/static/217b025f20850046c17bd9529e905f8d.png) no-repeat;
        overflow: hidden;
        background-position: -20px -380px;
        margin-left: 4px;
    }

    .product__view {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-weight: 400;
        color: #000;
        font-size: 14px;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        flex-grow: 0;
    }

    .product__view-container {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-weight: 400;
        color: #000;
        font-size: 14px;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        max-width: 150px;
        width: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
    }
    .product__image__box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .product__image {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-weight: 400;
        color: #000;
        font-size: 14px;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        border-style: none;
        display: block;
        width: 100%;
    }

    .product__content {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-weight: 400;
        color: #000;
        font-size: 14px;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        position: relative;
        flex-grow: 1;
        padding: 12px 20px 20px 10px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        flex-shrink: 150;
        box-sizing: border-box;
    }

    .product__link {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-weight: 400;
        font-size: 14px;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        background-color: transparent;
        pointer-events: none;
        text-decoration: none;
        color: inherit;
    }

    .product__head {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-weight: 400;
        font-size: 14px;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        pointer-events: none;
        color: inherit;
        margin-bottom: 12px;
    }

    .product__title {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        pointer-events: none;
        font-weight: 500;
        font-size: 20px;
        color: #333;
    }

    .product__info {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-weight: 400;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        pointer-events: none;
        color: inherit;
        font-size: 15px;
    }

    .product__bottom {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-weight: 400;
        color: #000;
        font-size: 14px;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .product__price {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        color: #000;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        font-size: 18px;
        font-weight: 500;
        white-space: nowrap;
    }

    .product__currency {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        color: #000;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        font-weight: 500;
        white-space: nowrap;
        font-size: 12px;
        text-transform: uppercase;
        margin-left: 7px;
    }

    .product__count {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-weight: 400;
        color: #000;
        font-size: 14px;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
    }

    .numeric {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        font-weight: 400;
        color: #000;
        font-size: 14px;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .numeric__button {

    }

    .numeric__button_minus {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        overflow: visible;
        text-transform: none;
        background: transparent;
        position: relative;
        border: 0;
        outline: 0;
        width: 14px;
        height: 14px;
        cursor: pointer;
        flex: none;
        padding: 0;
        margin: 0;
        -webkit-appearance: button;
    }

    .numeric__value {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        color: #000;
        font-family: sf-ui-text, Arial, Helvetica, sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        min-width: 26px;
        text-align: center;
        font-size: 22px;
        margin: 0 5px;
    }

    .numeric__button_plus {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        overflow: visible;
        text-transform: none;
        background: transparent;
        position: relative;
        border: 0;
        outline: 0;
        width: 14px;
        height: 14px;
        cursor: pointer;
        flex: none;
        padding: 0;
        margin: 0;
        -webkit-appearance: button;
    }
</style>
