<script setup>
    import { mapState } from 'pinia';
    import { useCoverStore } from "../../States/stores/contents/covers";
    import Countdown from "./Countdown.vue"
</script>

<template>
    <section class="counter-time my-16" :class="fontCover">
        <div class="container mx-auto font-font3">
            <div class="row-auto">
                <h3 class="flex justify-center text-center font-extrabold text-3xl uppercase text-yellow-400">Time To Akad</h3>
            </div>
            <div class="row-auto mt-16">
                <Countdown :time="time" :interval="interval"></Countdown>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        computed: {
            ...mapState(useCoverStore, { fontCover: 'getFontCover' }),
        },
        data() {
            const akadDate = new Date("November 10, 2022 08:00:00");
            return {
                time: akadDate,
                interval: 1000,
            }
        },
    
    }
</script>