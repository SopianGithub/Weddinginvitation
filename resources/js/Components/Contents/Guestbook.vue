<script setup>
    import { mapActions, mapState } from 'pinia';
    import { useCoverStore } from "../../States/stores/contents/covers";
    import { useGuestStore } from "../../States/stores/contents/guests";
    import { useGreetingStore } from "../../States/stores/contents/greetings";
    import { useSvcGenStore } from '../../States/stores/services/general';
    import moment from 'moment';
</script>

<template>
    <section class="addrbook py-4 mb-16" :class="fontCover">
        <div class="container mx-auto max-w-lg">
            <div class="flex justify-center mb-8">
                <img src="/images/port1/mahkota.png" alt="mahkota" class="max-w-xs">
            </div>
            <div class="flex justify-center pb-8">
                <h2 class="text-3xl font-bold uppercase text-yellow-400">GUEST BOOK</h2>
            </div>
            <div class="grid grid-cols-1 mx-16">
                <form @submit.prevent="submitGreeting">
                    <div class="flex flex-col mb-4">
                        <label for="" class="text-gray-50 font-semibold">Nama</label>
                        <input type="text" class="form-control my-4 text-gray-900" id="guestName" name="name" v-model="comments.nama" placeholder="Your Name" autocomplete="off" />
                    </div>
                    <div class="flex flex-col mb-4">
                        <label for="" class="text-gray-50 font-semibold">Konfirmasi Kehadiran</label>
                        <div class="bg-black form-control py-4">
                            <div class="form-check form-switch">
                                <input v-model="comments.isConfirm" class="form-check-input appearance-none w-9 rounded-full float-left h-5 align-top bg-no-repeat bg-contain focus:outline-none cursor-pointer shadow-sm checked:bg-yellow-500" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                <label class="form-check-label inline-block text-gray-50" for="flexSwitchCheckDefault ml-4">&nbsp;Hadir</label>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col mb-4">
                        <label class="my-4 text-gray-50 font-semibold" for="">Pesan dan Doa</label>
                        <textarea name="pesan" id="message" cols="30" rows="7" v-model="comments.pesan" class="bg-transparent rounded-xl border-b-2 border-yellow-300"></textarea>
                    </div>

                    <div class="flex justify-center">
                        <button type="submit" class="bg-yellow-500 hover:bg-yellow-400 rounded-lg text-gray-900 p-2 font-bold" :class="{ 'opacity-50': !comments.pesan.length }" :disabled="!comments.pesan.length" >Kirim Pesan</button>
                    </div>
                    <div class="flex justify-center p-4">
                        <progress v-if="loading" class="progress w-56 bg-gray-500"></progress>
                    </div>
                </form>
            </div>

            <div id="show-guest" class="grid grid-cols-1 mx-8 py-16">
                <div class="container mx-auto text-left max-h-96 overflow-y-auto">
                    <div class="grid grid-cols-1 justify-center overflow-y-auto" v-for="item in greeting">
                        <div class="flex items-start mx-2 mb-3">
                            <img class="rounded-full font-extrabold mr-3 xl:none sm:block md:block lg:block" :src="'https://na.ui-avatars.com/api/?name='+item.nama+'&amp;size=50'" alt="Image Avatar" />
                            <div class="media-body">
                                <div class="mb-2">
                                    <h5 class="text-lg mb-0 text-yellow-500 text-bold">{{ item.nama }}</h5>
                                    <small class="text-gray-200">{{ moment(item.created_at).format('DD-MM-YYYY hh:mm:ss') }}</small>
                                </div>

                                <p>{{ item.pesan }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        created() {
            this.invitName = this.guest;
            this.invitAddr = this.address;
            this.comments.nama = this.guest;
        },
        mounted() {
            setTimeout(()=>{
                this.checkComments();
            },5000);
        },
        computed: {
            ...mapState(useCoverStore, { fontCover: 'getFontCover' }),
            ...mapState(useGuestStore, { guest: 'getInviteGuest', address: 'getInviteAddress' }),
            ...mapState(useSvcGenStore, { miftah: 'getMiftah'}),
            ...mapState(useGreetingStore, { greeting: 'getlistOfGreetings', loading: 'getLoadingState'}),
        },
        watch: {
            checkComments(){
                if(this.miftah !== ''){
                    this.loadComments(1, this.miftah);
                    this.listComments = this.greeting;
                }
            }
        },
        data() {
            return {
                invitName: "",
                invitAddr: "Tempat",
                comments: {
                    couple_desc_id: 1,
                    nama: "",
                    pesan: '',
                    isConfirm: false,
                },
                listComments: [],
            }
        },
        methods: {
            ...mapActions(useGreetingStore, ['submitComment', 'loadComments', 'setlistOfGreetings']),
            checkComments(){
                if(this.miftah !== ''){
                    this.loadComments(1, this.miftah);
                    this.listComments = this.greeting;

                    return this.listComments;
                }
            },
            submitGreeting(){
                this.submitComment(this.comments, this.miftah);
                if(!this.loading){
                    this.setlistOfGreetings(this.checkComments());
                    this.comments.pesan = '';
                }
            },
        },
    
    }
</script>

