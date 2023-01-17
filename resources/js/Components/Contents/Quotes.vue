<script setup>
    import { mapState } from 'pinia';
    import { useCoverStore } from "../../States/stores/contents/covers";
</script>

<template>
    <section :class="fontCover" class="my-16">
        <div class="container mx-auto font-font3">
            <div class="row-auto flex justify-center">
                <h2 class="text-3xl font-extrabold uppercase text-yellow-400">Quotes</h2>
            </div>
            <div class="row-auto flex justify-center p-8 mt-4">
                <p class="text-lg text-gray-50">
                    <span>"</span>
                    Mahasuci Allah yang telah menciptakan semuanya berpasang-pasangan, baik dari apa yang ditumbuhkan oleh bumi dan dari diri mereka sendiri maupun dari apa yang tidak mereka ketahui
                    <span>"</span>
                </p>
            </div>
            <h3 class="flex justify-center text-xl text-yellow-500">QS. Yasin Ayat 36</h3>
        </div>
    </section>
</template>

<script>
    export default {
        computed: {
            ...mapState(useCoverStore, { fontCover: 'getFontCover' }),
        },
        data() {
            return {
                
            }
        },
    
    }
</script>