<script setup>
    import { mapState } from 'pinia';
    import { useCoverStore } from "../../States/stores/contents/covers";
    import { useCoupleStore } from "../../States/stores/contents/couples";
</script>
<template>
    <section id="couple" class="text-yellow-400" :class="fontCover">
        <div class="container mx-auto mt-8">
            <div class="row-auto">
                <h2 class="flex justify-center text-4xl font-extrabold">
                    {{title}}
                </h2>
            </div>
            <div class="row-auto mx-4 pt-4">
                <i class="flex justify-center mb-4">Assalamu’alaikum Warahmatullahi Wabarakatuh</i>
                <p class="flex justify-center text-center">Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.</p>
                <p class="flex justify-center text-center">Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:</p>
            </div>
        </div>
        <div class="row-auto pt-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8">
                <div id="jauzah">
                    <div class="relative">
                        <div class="row-auto px-2 jauzah-ring">
                            <div class="flex max-w-full justify-center">
                                <img src="/images/port1/zaujah.png" alt="Zaujah Photo" class="w-1/3 h-auto rounded-full align-middle border-none">
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col my-4 text-center justify-center gap-2">
                        <h3 class="text-2xl uppercase font-extrabold text-yellow-400 mb-2">{{girl}}</h3>
                        <h3>{{coupleslist.wanita.nama_lengkap}}</h3>
                        <p>Putri dari Pasangan <br/> {{coupleslist.wanita.nama_ayah}} & {{coupleslist.wanita.nama_ibu}}</p>
                        <p>{{coupleslist.wanita.alamat_rumah}}</p>
                        <div class="socmed"></div>
                    </div>
                </div>
                <div id="jauz">
                    <div class="relative">
                        <div class="row-auto px-2 jauz-ring">
                            <div class="flex max-w-full justify-center">
                                <img src="/images/port1/zauj.png" alt="Zauj Photo" class="w-1/3 h-auto rounded-full align-middle border-none">
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col my-4 text-center justify-center gap-2 font-caption">
                        <h3 class="text-2xl uppercase font-extrabold text-yellow-400 mb-2">{{man}}</h3>
                        <h3>{{coupleslist.pria.nama_lengkap}}</h3>
                        <p>Putra dari Pasangan <br/> {{coupleslist.pria.nama_ayah}} & {{coupleslist.pria.nama_ibu}}</p>
                        <p>{{coupleslist.pria.alamat_rumah}}</p>
                        <div class="socmed"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .jauzah-ring::before {
        @apply content-[''] bg-[url('/images/port1/border-couple-1.png')] bg-contain bg-center bg-no-repeat absolute block left-0 w-full h-full;
    }

    .jauz-ring::before {
        @apply content-[''] bg-[url('/images/port1/border-couple-2.png')] bg-contain bg-center bg-no-repeat absolute block left-0 w-full h-full;
    }
</style>

<script>
export default {
    computed: {
        ...mapState(useCoverStore, { man: 'getCouplesMan', girl: 'getCoupleGirl', fontCover: 'getFontCover' }),
        ...mapState(useCoupleStore, {title: 'getTitleCouple', coupleslist: 'getCouple'})
    },
    data() {
        return {
            
        }
    },

}
</script>
