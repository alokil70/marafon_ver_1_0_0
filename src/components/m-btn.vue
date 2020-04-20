<template>
    <div
            class="m-btn"
            :class="{'disabled' : disabled}"
            @click="click"
    >
        <span>{{title}}</span>
    </div>
</template>

<script>
    export default {
        name: "m-btn",
        props: {
            title: String,
            disabled: Boolean
        },
        methods: {
            click() {
                this.$emit('click')
            }
        }
    }
</script>

<style scoped>
.m-btn {
    padding: 8px 16px;
    text-align: center;
    color: #ffffff;
    background-color: red;
    width: fit-content;
    user-select: none;
    cursor: pointer;
}
    .m-btn:hover {
        background: #ff3535;
    }
    .disabled {
        pointer-events: none;
        background-color: #aeaeae;
    }
</style>
