<template>
    <div class="m-btn">
        <span>{{title}}</span>
    </div>
</template>

<script>
    export default {
        name: "m-btn",
        props: {
            title: String
        }
    }
</script>

<style scoped>
.m-btn {
    border-radius: 4px;
    padding: 8px 16px;
    color: #fff;
    background: red;
    max-width: 100px;
}
</style>
