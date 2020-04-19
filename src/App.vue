<template>
    <div id="app">
        <m-main-wrapper/>
    </div>
</template>

<script>
    import MMainWrapper from "./components/m-main-wrapper";

    export default {
        name: 'App',
        components: {
            MMainWrapper,
        }
    }
</script>

<style lang="scss">
    #app {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
        color: #2c3e50;
    }
</style>
