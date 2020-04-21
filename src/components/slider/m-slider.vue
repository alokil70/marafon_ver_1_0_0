<template>
    <div class="m-slider">
        <div
                class="wrapper"
                :style="{ 'margin-left': '-' + (100 * curentIdxImg) + '%' }"

        >
            <m-slider-item
                    class="images"
                    v-for="item in arr_data"
                    :key="item.id"
                    :item="item"
            />
        </div>
        <div class="m-slider__btn">
            <button @click="prevSlide">Prev</button>
            <button @click="nextSlide">Next</button>
        </div>
    </div>
</template>

<script>
    import MSliderItem from "./m-slider-item";

    export default {
        name: "m-slider",
        components: {MSliderItem},
        data() {
            return {
                curentIdxImg: 0
            }
        },
        props: {
            arr_data: Array
        },
        methods: {
            nextSlide() {
                this.curentIdxImg++
            },
            prevSlide() {

            }
        }
    }
</script>

<style scoped>
    .m-slider {
    }

    .m-slider__btn {

    }

    .wrapper {
        width: 700px;
        height: 500px;
        overflow: hidden;
    }

    .images {

    }
</style>
