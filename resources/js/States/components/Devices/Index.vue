<script setup>
    import { useDeviceStore } from "../../stores/devices.js";
    import Computer from './Computer.vue';
    import Mobile from './Mobile.vue';
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
                <Mobile />
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
                <Computer />
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

</style>

<script>

    import icons from "../../../Icons/Index.vue";
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