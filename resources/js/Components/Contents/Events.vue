<script setup>
    import { mapState } from 'pinia';
    import { useCoverStore } from "../../States/stores/contents/covers";
</script>

<template>
    <section class="maukid my-16" :class="fontCover">
        <div class="container mx-auto max-w-5xl">
            <div class="flex justify-center items-center">
                <img src="/images/port1/mahkota.png" alt="mahkota" class="max-w-xs">
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12 mt-8">
                <div class="flex justify-center">
                    <div class="information-wrap">
                        <div class="information">
                            <h3 class="caption-mikad">Akad Nikah</h3>
                            <p>
                                Kamis, 10 November 2022
                                <br/>
                                08:00 - 10:00 WIB
                            </p>
                            <p>
                                Masjid Pon-Pes Al-Khoeriyyah 
                                <br/>
                                Kp. Pamipiran RT/RW 02/04 Ds. Pagersari Kec. Pagerageung Kab. Tasikmalaya
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="information-wrap">
                        <div class="information">
                            <h3 class="caption-mikad">Resepsi</h3>
                            <p>
                                Kamis, 10 November 2022
                                <br/>
                                10:00 - Selesai WIB
                            </p>
                            <p>
                                Kompleks Pon-Pes Al-Khoeriyyah
                                <br/>
                                Kp. Pamipiran RT/RW 02/04 Ds. Pagersari Kec. Pagerageung Kab. Tasikmalaya
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-rows-2 max-w-full justify-center">
                <h5 class="text-center">Add to :</h5>
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&amp;dates=20221110T080000Z/20221110T140000Z&amp;text=Gita+%26+Yayan+Wedding&amp;details=Gita+%26+Yayan+Wedding+on+Kamis%2C+10+November22&amp;location=Ponpes%2C+Al-Khoeriyyah%2C+%7C+Kp.Pamipiran%2C+Pagersari%2C+Kec.+Pagerageung%2C+Tasikmalaya%2C+Jawa+Barat" target="_blank" class="btn btn-primary mt-2 mx-1 hover:bg-yellow-600">
                    Google Calendar
                </a>
            </div>
        </div>
    </section>        

</template>

<style lang="scss">
    .information-wrap {
        @apply relative mb-4 p-4 text-yellow-500;

        .information {
            @apply text-center bg-contain border-double p-5 h-full border-yellow-500 ring-offset-2 ring-4 ring-offset-yellow-500 gap-4 flex flex-col;

            h3 {
                @apply uppercase text-xl font-extrabold text-yellow-400;
            }
        }

        .information::before,
        .information::after,
        .information h3::before,
        .information h3::after {
            @apply w-28 h-28 block absolute;
        }

        .information h3::before {
            @apply content-[''] bg-[url('/images/port1/border-information-tl.png')] bg-left-top bg-no-repeat bg-contain -top-2 -left-1;
        }

        .information h3::after {
            @apply content-[''] bg-[url('/images/port1/border-information-tr.png')] bg-left-top bg-no-repeat bg-contain -top-2 -right-2;
        }

        .information::before {
            @apply content-[''] bg-[url('/images/port1/border-information-bl.png')] bg-left-top bg-no-repeat bg-contain -bottom-2 -left-1;
        }

        .information::after {
            @apply content-[''] bg-[url('/images/port1/border-information-br.png')] bg-left-top bg-no-repeat bg-contain -bottom-2 -right-2;   
        }
    }

</style>

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