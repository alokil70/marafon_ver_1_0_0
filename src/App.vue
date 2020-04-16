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

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
