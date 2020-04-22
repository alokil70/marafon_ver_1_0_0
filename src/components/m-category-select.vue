<template>
    <div class="m-category-select">
        <div class="select">
            <p class="title"
               @click="areOptionsVisible = !areOptionsVisible"
            >{{selected}}</p>
            <div v-if="areOptionsVisible"
                 class="options">
                <p v-for="option in options"
                   :key="option.id"
                   @click="selectOption(option)">
                    {{option.categoryName}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "m-category-select",
        props: {
            options: Array,
            selected: String
        },
        data() {
            return {
                areOptionsVisible: false
            }
        },
        methods: {
            selectOption(option) {
                this.$emit('selectOption', option)
                this.areOptionsVisible = false
            },
            hideSelect() {
                this.areOptionsVisible = false
            }
        },
        mounted() {
            document.addEventListener('click', this.hideSelect.bind(this), true)
        },
        beforeDestroy() {
            document.removeEventListener('click', this.hideSelect)
        }
    }
</script>

<style scoped>
    .m-category-select {
        padding: 8px;
    }

    .select {
        position: relative;
        width: 200px;
    }

    .title {
        border: solid #aeaeae;
        cursor: pointer;
    }

    .m-category-select p {
        margin: 0;
    }

    .options {
        position: absolute;
        top: 20px;
        right: 0;
        width: 100%;
        border: solid #aeaeae;
    }

    .options p:hover {
        background-color: #aeaeae;
    }
</style>
