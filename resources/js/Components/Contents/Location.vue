<script setup>
    import { mapState } from 'pinia';
    import { useCoverStore } from "../../States/stores/contents/covers";
</script>

<template>
    <section class="mikad my-16" :class="fontCover">
        <div class="container mx-auto p-4">
            <div class="grid grid-cols-1 gap-2">
                <div class="flex justify-center">
                    <h2 class="text-3xl font-bold uppercase text-yellow-400">MAPS Location</h2>
                </div>
                <div class="grid grid-cols-1 gap-4 mt-4">
                    <div class="mapouter flex justify-center">
                        <div class="gmap_canvas w-3/4 border-4 border-solid border-yellow-500 rounded-md">
                            <iframe width="100%" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Pondok%20Pesantren%20Al-khoeriah%20Pagersari,%20Pagerageung,%20Tasikmalaya%20Regency,%20West%20Java%2046158&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <a target="_blank" href="https://www.google.com/maps/dir/?api=1&amp;destination=-7.1219769,108.1573866&amp;zoom=20&amp;dir_action=navigate" class="btn btn-primary mt-3 hover:bg-yellow-600">Open Google Maps</a>
                    </div>
                </div>
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
            return {
                
            }
        },
    
    }
</script>