<script setup>
    import { useDeviceStore } from "../stores/devices.js";
</script>

<template>
    <div id="configrations" class="mx-2">
        <div class="tabs tabs-boxed justify-end">
            <a class="tab" :class="deviceTabs.phone ? 'tab-active' : ''" @click="setDeviceTabs('phone')">
                <icons name="phonedevice" class="text-center" :size="iconSizeConfig"></icons>
            </a> 
            <a class="tab" :class="deviceTabs.tablet ? 'tab-active' : ''" @click="setDeviceTabs('tablet')">
                <icons name="tabletdevice" class="text-center" :size="iconSizeConfig"></icons>
            </a> 
            <a class="tab" :class="deviceTabs.computer ? 'tab-active' : ''" @click="setDeviceTabs('computer')">
                <icons name="computerdevice" class="text-center" :size="iconSizeConfig"></icons>
            </a> 
        </div>
        <div id="deviceOption">
            <div id="phone" v-show="deviceTabs.phone" class="flex justify-center">
                <div class="mockup-phone">
                    <div class="camera"></div> 
                    <div class="display">
                        <div class="artboard artboard-demo phone-1 relative overflow-y-auto h-screen">
                            <div class="absolute h-full w-full">
                                <div class="container bg-center bg-cover bg-no-repeat bg-[url('/images/port1/18385244.jpg')] h-full">
                                    <div class="flex flex-col justify-center text-center">
                                        <h4 id="title-invite">Undangan Pernikahan</h4>
                                    </div>
                                    <div class="bg-[url('/images/port1/738-ai.png')] bg-contain bg-no-repeat bg-center w-full h-64 flex justify-center font-extrabold text-4xl py-28" >
                                        G &amp; Y
                                    </div>
                                    <div class="flex flex-col justify-center text-center gap-4">
                                        <h1>Gita & Yayan</h1>
                                        <h4>Kamis, 10 November 2022</h4>
                                    </div>
                                </div>
                                <div class="container h-full">
                                    <div class="row-auto py-4">
                                        <h2 class="flex justify-center text-3xl">
                                            GROOM &amp; BRIDE
                                        </h2>
                                    </div>
                                    <div class="row-auto">
                                        <i class="flex justify-center text-center mb-2">Assalamu’alaikum Warahmatullahi Wabarakatuh</i>
                                        <p class="flex justify-center text-center">Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.</p>
                                        <p class="flex justify-center text-center">Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:</p>
                                    </div>
                                    <div class="row-auto">
                                        <div class="grid grid-cols-1 gap-2">
                                            <div id="jauz">
                                                <div class="relative">
                                                    <div class="row-auto px-2 before:content-['*'] before:bg-[url('/images/port1/border-couple-2.png')] before:bg-contain before:bg-no-repeat before:absolute before:block before:left-0 before:w-full before:h-full before:bg-center">
                                                        <div class="flex max-w-full justify-center">
                                                            <img src="/images/port1/zauj.png" alt="Zauj Photo" class="w-1/3 h-auto rounded-full align-middle border-none">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex flex-col my-4 text-center justify-center gap-2 font-caption">
                                                    <h3 class="text-2xl uppercase font-extrabold text-amber-200 mb-2">Yayan</h3>
                                                    <h3>Yayan Sopian</h3>
                                                    <p>Putra dari Pasangan <br/> Bpk Nono Waryono(Alm) & Ibu Ombah</p>
                                                    <p>Kp. Tanjungsari 07/02 Ds. Pamoyanan Kec. Kadipaten Kab. Tasikmalaya</p>
                                                    <div class="socmed"></div>
                                                </div>
                                            </div>
                                            <div id="jauzah">
                                                <div class="relative">
                                                    <div class="row-auto px-2before:content-['*'] before:bg-[url('/images/port1/border-couple-1.png')] before:bg-contain before:bg-no-repeat before:absolute before:block before:left-0 before:w-full before:h-full before:bg-center">
                                                        <div class="flex max-w-full justify-center">
                                                            <img src="/images/port1/zaujah.png" alt="Zaujah Photo" class="w-1/3 h-auto rounded-full align-middle border-none">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex flex-col my-4 text-center justify-center gap-2">
                                                    <h3 class="text-2xl uppercase font-extrabold text-amber-200 mb-2">Gita</h3>
                                                    <h3>Gita Thohiroturrohmah</h3>
                                                    <p>Putra dari Pasangan <br/> Bpk Otong & Ibu Nonoh</p>
                                                    <p>Kp. Pamipiran 02/04 Ds. Pagersari Kec. Pagerageung Kab. Tasikmalaya</p>
                                                    <div class="socmed"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
            <div id="tablet" v-show="deviceTabs.tablet" class="flex justify-center">
                <div class="mockup-window border border-base-300 w-1/2">
                    <div class="flex justify-center px-4 py-16 border-t bg-cover bg-[url('/images/port1/18385244.jpg')]">
                        <div class="container mx-auto">
                            <div class="flex flex-col justify-center text-center gap-4">
                                <h4 id="title-invite">Undangan Pernikahan</h4>
                                <h1>Gita & Yayan</h1>
                                <h4>Kamis, 10 November 2022</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="computer" v-show="deviceTabs.computer">
                <div class="mockup-window border bg-base-300">
                    <div class="h-screen overflow-y-scroll">
                        <section id="cover">
                            <div class="flex justify-center px-4 py-16 h-screen bg-cover bg-[url('/images/port1/18385244.jpg')]">
                                <div class="container mx-auto">
                                    <div class="flex flex-col justify-center text-center">
                                        <h4 id="title-invite">Undangan Pernikahan</h4>
                                    </div>
                                    <div class="bg-[url('/images/port1/738-ai.png')] bg-contain bg-no-repeat bg-center w-full h-72 flex justify-center font-extrabold text-6xl py-28">
                                        G &amp; Y
                                    </div>
                                    <div class="flex flex-col justify-center text-center gap-4">
                                        <h1>Gita & Yayan</h1>
                                        <h4>Kamis, 10 November 2022</h4>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                        <section id="couple">
                            <div class="container mx-auto mt-8">
                                <div class="row-auto">
                                    <h2 class="flex justify-center text-3xl">
                                        GROOM &amp; BRIDE
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
                                    <div id="jauz">
                                        <div class="relative">
                                            <div class="row-auto px-2 jauz-ring">
                                                <div class="flex max-w-full justify-center">
                                                    <img src="/images/port1/zauj.png" alt="Zauj Photo" class="w-1/3 h-auto rounded-full align-middle border-none">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-col my-4 text-center justify-center gap-2 font-caption">
                                            <h3 class="text-2xl uppercase font-extrabold text-amber-200 mb-2">Yayan</h3>
                                            <h3>Yayan Sopian</h3>
                                            <p>Putra dari Pasangan <br/> Bpk Nono Waryono(Alm) & Ibu Ombah</p>
                                            <p>Kp. Tanjungsari 07/02 Ds. Pamoyanan Kec. Kadipaten Kab. Tasikmalaya</p>
                                            <div class="socmed"></div>
                                        </div>
                                    </div>
                                    <div id="jauzah">
                                        <div class="relative">
                                            <div class="row-auto px-2 before:content-['*'] before:bg-[url('/images/port1/border-couple-1.png')] before:bg-contain before:bg-no-repeat before:absolute before:block before:left-0 before:w-full before:h-full before:bg-center">
                                                <div class="flex max-w-full justify-center">
                                                    <img src="/images/port1/zaujah.png" alt="Zaujah Photo" class="w-1/3 h-auto rounded-full align-middle border-none">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-col my-4 text-center justify-center gap-2">
                                            <h3 class="text-2xl uppercase font-extrabold text-amber-200 mb-2">Gita</h3>
                                            <h3>Gita Thohiroturrohmah</h3>
                                            <p>Putra dari Pasangan <br/> Bpk Otong & Ibu Nonoh</p>
                                            <p>Kp. Pamipiran 02/04 Ds. Pagersari Kec. Pagerageung Kab. Tasikmalaya</p>
                                            <div class="socmed"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="maukid">
                            <div class="container mx-auto font-font3 max-w-5xl">
                                <div class="flex justify-center">
                                    <img src="/images/port1/mahkota.png" alt="mahkota" class="max-w-xs">
                                </div>
                                <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12 mt-8">
                                    <div class="flex">
                                        <div class="information-wrap">
                                            <div class="information">
                                                <h3 class="caption-mikad">Akad Nikah</h3>
                                                <p>
                                                    Thursday, 10 November 2022
                                                    <br/>
                                                    08:00 - 09:00 WIB
                                                </p>
                                                <p>
                                                    Masjid Al-Khoeriyyah 
                                                    <br/>
                                                    Pondok Pesantren Al-Khoeriyyah, Kp. Pamipiran Ds. Pagersari Kec. Pagerageung Kab. Tasikmalaya
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex">
                                        <div class="information-wrap">
                                            <div class="information">
                                                <h3 class="uppercase">Resepsi</h3>
                                                <p>
                                                    Thursday, 10 November 2022
                                                    <br/>
                                                    09:00 - 12:00 WIB
                                                </p>
                                                <p>
                                                    Rumah Mempelai Wanita
                                                    <br/>
                                                    Kp. Pamipiran 02/04 Ds. Pagersari Kec. Pagerageung Kab. Tasikmalaya
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid grid-rows-2 max-w-full justify-center">
                                    <h5 class="text-center">Add to :</h5>
                                    <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&amp;dates=20221110T080000Z/20221110T140000Z&amp;text=Gita+%26+Yayan+Wedding&amp;details=Gita+%26+Yayan+Wedding+on+Thursday%2C+10+November22&amp;location=Rumah%2C+Mempelai%2C+Wanita%2C+%7C+Kp.Pamipiran%2C+Pagersari%2C+Kec.+Pagerageung%2C+Tasikmalaya%2C+Jawa+Barat" target="_blank" class="btn btn-primary mt-2 mx-1 hover:bg-gray-50" data-aos="fade-down" data-aos-delay="300">
                                        Google Calendar
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>        
</template>

<style lang="scss">
    .information-wrap {
        @apply relative mb-4 px-4;

        .information {
            @apply text-center bg-contain border-double p-5 h-full border-yellow-500 ring-offset-2 ring-4 ring-offset-yellow-500 gap-4 flex flex-col;

            h3 {
                @apply uppercase;
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

    .jauzah-ring::before {
        @apply content-[''] bg-[url('/images/port1/border-couple-1.png')] bg-contain bg-center bg-no-repeat absolute block left-0 w-full h-full;
    }

    .jauz-ring::before {
        @apply content-[''] bg-[url('/images/port1/border-couple-2.png')] bg-contain bg-center bg-no-repeat absolute block left-0 w-full h-full;
    }

</style>

<script>

    import icons from "../../Icons/Index.vue";
    import { mapState, mapActions } from 'pinia'

    export default {
        components: {
            icons
        },
        computed: {
            ...mapState(useDeviceStore, {deviceTabs: 'results'})
        },

        methods: {
            ...mapActions(useDeviceStore, ['setDeviceTabs']),
        },

        created() {
            const store = useDeviceStore();
            console.log(store.deviceTabs);
        },
        data() {
            return {
                iconSizeConfig: {
                    height: 6,
                    width: 6
                },
            }
        },
    }
</script>