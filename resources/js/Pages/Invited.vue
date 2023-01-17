<script setup>
    import covers from "../Components/Contents/Covers.vue"
    import couples from "../Components/Contents/Couples.vue"
    import events from "../Components/Contents/Events.vue"
    import location from "../Components/Contents/Location.vue"
    import quotes from "../Components/Contents/Quotes.vue"
    import countdown from "../Components/Contents/Countdownpage.vue"
    import guestbook from "../Components/Contents/Guestbook.vue"


    import { useSvcGenStore } from "../States/stores/services/general"
    import { mapActions, mapState, mapWritableState } from 'pinia'
</script>

<template>
    <div class="h-screen overflow-y-scroll bg-black">
        <covers></covers>
        
        <couples></couples>

        <events></events>

        <location></location>

        <quotes></quotes>

        <countdown></countdown>

        <guestbook></guestbook>        

        <div class="play-pause btn-play-pause" id="button-control" @click="playMusic">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z" />
            </svg>
        </div>

        <label for="my-modal-3" class="modal-button btn-donation flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
            Kirim Hadiah
        </label>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal font-font3">
            <div class="modal-box relative bg-white text-gray-900">
                <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2 hover:bg-slate-500">✕</label>
                <div id="header-gift" class="container mx-auto mt-4 border-b-2">
                    <div class="flex items-center mx-auto justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-center">Kirim Hadiah</h3>
                    <p class="text-md font-bold text-center">Untuk Gita & Yayan</p>
                </div>
                <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box bg-white text-gray-900 mt-2">
                    <div class="collapse-title text-xl font-medium bg-white">
                        <label class="flex flex-row">
                            <img src="/images/bank/bni.png" alt="BNI" class="w-1/5" />
                        </label>
                    </div>
                    <div class="collapse-content bg-white"> 
                        <p class="flex justify-between">
                            <div>0573832764</div>
                            <div @click="copyTextRek('0573832764', 'BNI')" class="flex flex-nowrap">
                                <img src="/images/bank/copy.png" alt="Copy Button" class="h-4 w-4 mx-2">
                                <span v-if="notif['BNI']" class="m-auto bg-green-100 text-green-600 rounded-md font-bold text-md"> Copied </span>
                            </div> 
                        </p>
                        <p>a.n Yayan Sopian</p>
                        <img src="/images/bank/qris_bni.jpg" alt="QRIS" />
                    </div>
                </div>
                <div tabindex="1" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box bg-white text-gray-900">
                    <div class="collapse-title text-xl font-medium bg-white">
                        <label class="flex flex-row">
                            <img src="/images/bank/linkaja.png" alt="Linkaja" class="w-1/5" />
                        </label>
                    </div>
                    <div class="collapse-content bg-white"> 
                        <p class="flex justify-between">
                            <div>085342422507</div>
                            <div @click="copyTextRek('085342422507', 'Linkaja')" class="flex flex-nowrap">
                                <img src="/images/bank/copy.png" alt="Copy Button" class="h-4 w-4 mx-2">
                                <span v-if="notif['Linkaja']" class="m-auto bg-green-100 text-green-600 rounded-md font-bold text-md"> Copied </span>
                            </div> 
                        </p>
                        <p>a.n Yayan Sopian</p>
                    </div>
                </div>
                <div tabindex="1" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box bg-white text-gray-900">
                    <div class="collapse-title text-xl font-medium bg-white">
                        <label class="flex flex-row">
                            <img src="/images/bank/gopay.png" alt="Gopay" class="w-1/5" />
                        </label>
                    </div>
                    <div class="collapse-content bg-white"> 
                        <p class="flex justify-between">
                            <div>085871152707</div>
                            <div @click="copyTextRek('085871152707', 'Gopay')" class="flex flex-nowrap">
                                <img src="/images/bank/copy.png" alt="Copy Button" class="h-4 w-4 mx-2">
                                <span v-if="notif['Gopay']" class="m-auto bg-green-100 text-green-600 rounded-md font-bold text-md"> Copied </span>
                            </div> 
                        </p>
                        <p>a.n Yayan Sopian</p>
                    </div>
                </div>
                <div tabindex="1" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box bg-white text-gray-900">
                    <div class="collapse-title text-xl font-medium bg-white">
                        <label class="flex flex-row">
                            <img src="/images/bank/dana.png" alt="Dana" class="w-1/5" />
                        </label>
                    </div>
                    <div class="collapse-content bg-white"> 
                        <p class="flex justify-between">
                            <div>085871152707</div>
                            <div @click="copyTextRek('085871152707', 'Dana')" class="flex flex-nowrap">
                                <img src="/images/bank/copy.png" alt="Copy Button" class="h-4 w-4 mx-2">
                                <span v-if="notif['Dana']" class="m-auto bg-green-100 text-green-600 rounded-md font-bold text-md"> Copied </span>
                            </div> 
                        </p>
                        <p>a.n Yayan Sopian</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss">
    .play-pause {
        @apply bg-yellow-50;
        display: inline-block;
        padding: 0px 5px;
        position: fixed;
        bottom: 10px;
        left: 10px;
        z-index: 100;
        border-radius: 3px;
        cursor: pointer;
    }

    .btn-donation {
        position: fixed;
        bottom: 10px;
        left: 0;
        right: 0;
        z-index: 3;
        background: #fff;
        padding: 4px;
        width: 200px;
        margin: auto;
        text-align: center;
        border-radius: 10px;
        color: #000;
        border: solid 1px #e6e6e6;
    }
</style>

<script>

const audio = new Audio('sounds/Baraakalloh.mp3'); // path to file

export default {
    props: {
        generallyAPIKey: String,
        generallySecretKeyAPI: String,
        id: Number,
    },
    computed: {
        ...mapWritableState(useSvcGenStore,{miftah: 'getMiftah'}),
    },
    created() {
        audio.pause();
    },
    mounted() {
        // audio.play();
        this.setMiftah(this.generallyAPIKey);
    },
    data() {
        return {
            playing: false,
            notif : {'BNI' : false, 'Linkaja': false, 'Gopay': false, 'Dana': false}
        }
    },
    methods: {
        ...mapActions(useSvcGenStore, ['setMiftah']),
        copyTextRek(norek, bank){
            this.$copyText(norek)
                .then(() => {
                    this.notif[bank] = true;
                })
                .catch(() => {
                    console.log(`can't copy`);
                });

            setTimeout(() => {
                this.notif[bank] = false
            }, 2000);
        },
        playMusic(){
            this.playing = !this.playing
            if (this.playing) {
                audio.play()
            } else {
                audio.pause()
            }
        }
    },
}
</script>