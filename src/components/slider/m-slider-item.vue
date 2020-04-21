<template>
    <div class="m-slider-item">
        <img :src="imageName"/>
    </div>
</template>

<script>
    import {URL} from '../../const'
    export default {
        name: "m-slider-item",
        data: () => ({}),
        props: {
            item: Object
        },
        computed: {
            imageName() {
                return URL + '/uploads/' + this.item.imageName
            }
        }
    }
</script>

<style scoped>

</style>
