<template>
    <div
            class="m-btn"
            :class="className"
            @click="click"
    >
        <i class="material-icons">edit</i>
        <span>{{title}}</span>
    </div>
</template>

<script>
    export default {
        name: "m-btn",
        props: {
            title: String,
            disabled: Boolean,
            error: Boolean
        },
        computed: {
            className() {
                return {
                    'disabled': this.disabled,
                    'error': this.error
                }
            }
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
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px 16px;
        color: #ffffff;
        background-color: green;
        width: fit-content;
        user-select: none;
        cursor: pointer;
    }

    .m-btn:hover {
        background: #ff3535;
    }

    .material-icons {
        margin-right: 8px
    }

    .disabled {
        pointer-events: none;
        background-color: #aeaeae;
    }

    .error {
        background-color: red;
    }
</style>
