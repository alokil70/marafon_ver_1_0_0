<template>
    <div class="m-textField">
        <label for="">
            <input type="text"
                   @input="input">
        </label>
    </div>
</template>

<script>
    export default {
        name: "m-textField",
        props: {
            value: String, Number
        },
        methods: {
            input(e) {
                this.$emit('input', e.target.value)
            }
        }
    }
</script>

<style scoped>

</style>
