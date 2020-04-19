<template>
    <div class="m-main-wrapper">
        <div class="m-main-wrapper__pageTitle">
            <span class="m-main-wrapper__title">MARAFON{{printInput}}</span>
            <m-text-field
                    v-model="printInput"
            />
        </div>

        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
    import MTextField from "./m-textField";

    export default {
        name: "m-main-wrapper",
        components: {MTextField},
        data() {
            return {
                printInput: ''
            }
        },
        computed: {},
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .m-main-wrapper {

        &__pageTitle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #ff5c18;
        }
        &__title {
            font-size: 30px;
            padding-left: $padding*2;
            color: white;
        }
    }
</style>
