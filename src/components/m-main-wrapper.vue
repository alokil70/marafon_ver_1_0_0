<template>
    <div class="m-main-wrapper">

        <m-catalog/>
        <m-cart/>
    </div>
</template>

<script>
    import MCatalog from "./catalog/m-catalog";
    import MCart from "./cart/m-cart";

    export default {
        name: "m-main-wrapper",
        components: {MCart, MCatalog},
        data: () => {

        }
    }
</script>

<style scoped>

</style>
