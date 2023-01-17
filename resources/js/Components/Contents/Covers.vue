<script setup>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCoverStore } from "../../States/stores/contents/covers";
import { useGuestStore } from "../../States/stores/contents/guests";

</script>

<template>
    <section id="cover" :class="fontCover">
        <div class="front-cover">
            <div class="container mx-auto">
                <div class="flex flex-col justify-center text-center py-4 font-alice">
                    <h1 class="title-invite text-2xl font-bold uppercase mt-20 ">{{ title }}</h1>
                </div>
                <div class="initial-frame">
                    <span class="initial-text">
                        {{ girl.charAt(0).toUpperCase() }} &amp; {{ man.charAt(0).toUpperCase() }}
                    </span>
                </div>
                <div class="flex flex-col justify-center text-center gap-4 py-4">
                    <h1>{{ girl }} & {{ man }}</h1>
                    <h4>Kamis, 10 November 2022</h4>
                </div>
                <div class="row-auto my-4" v-show="showInviteTo">
                    <span class="flex justify-center">Kepada Yth</span>
                    <span class="flex justify-center">Bapak/Ibu/Saudara/i</span>
                    <h4 class="mt-1 text-lg font-semibold flex justify-center">{{guest}}</h4>
                    <span class="flex justify-center">di {{address}}</span>
                </div>
            </div>
        </div>
        <div class="back-footer"></div>
    </section>
</template>

<style lang="scss">
    #cover {
        @apply text-yellow-500 relative h-screen;

        h1 { 
            @apply text-3xl;
        }

        h4 {
            @apply text-xl;
        }

        .front-cover::after, .back-footer::before {
            @apply absolute block content-[''] h-1/3 w-1/2;
        }

        .front-cover::before, .back-footer::after {
            @apply absolute block content-[''] h-1/3 w-1/2;
        }

        .front-cover::before {
            @apply content-[''] bg-[url('/images/port1/tl.png')] bg-contain bg-no-repeat bg-left-top top-4 left-4 w-1/6 h-1/6
        }

        .front-cover::after {
            @apply content-[''] bg-[url('/images/port1/tr.png')] bg-contain bg-no-repeat bg-right-top top-4 right-4
        }

        .back-footer::before {
            @apply bg-[url('/images/port1/bl.png')] bg-contain bg-no-repeat bg-left-bottom bottom-0 left-0
        }

        .back-footer::after {
            @apply bg-[url('/images/port1/br.png')] bg-contain bg-no-repeat bg-right-bottom bottom-4 right-4 w-1/6 h-1/6
        }

        .initial-frame {
            @apply bg-[url('/images/port1/738-ai.png')] bg-contain bg-no-repeat bg-center w-full h-52 flex justify-center font-extrabold text-6xl py-16 mt-8;

            .initial-text {
                @apply text-center items-center;
            }
        }
        
    }
</style>

<script>
let uri = window.location.search.substring(1); 
let params = new URLSearchParams(uri);

export default {
    computed: {
        ...mapWritableState(useCoverStore, {title: 'getTitleCover', man: 'getCouplesMan', girl: 'getCoupleGirl', covers: 'getCovers', showInviteTo: 'getShowInviteTo', fontCover: 'getFontCover'}),
        ...mapWritableState(useGuestStore, {guest: 'getInviteGuest', address: 'getInviteAddress'})
    },
    mounted() {
        
    },
    methods: {
        ...mapActions(useCoverStore, ['setTitle', 'setCouplesMan', 'setCoupleGirl', 'setCovers', 'setShowInviteTo']),
        ...mapActions(useGuestStore, ['setInviteGuest', 'setInviteAddress'])
    },
    created() {
        this.setShowInviteTo(params.get("invit") !== null ? true : false);
        this.setInviteGuest(params.get("invit") ?? 'Ismun');
        this.setInviteAddress(params.get("address") ?? 'Tempat');
    },
}
</script>