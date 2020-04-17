<template>
    <div class="m-main-wrapper">
        <h1>wrapper</h1>
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>

    export default {
        name: "m-main-wrapper",
        data() {
            return {}
        },
        computed: {}
    }
</script>

<style lang="scss" scoped>
    .m-main-wrapper {
    }

    h1 {
        background-color: #ff5c18;
        color: white;
    }
</style>
