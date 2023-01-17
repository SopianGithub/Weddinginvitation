<script setup>
    import { mapActions, mapState, mapWritableState } from 'pinia';
    import { useCoverStore } from '../../../States/stores/contents/covers';
    import { useSvcGenStore } from '../../../States/stores/services/general';
    import axios from 'axios';
</script>

<template>
    <div class="flex flex-col gap-2">
        <div class="form-control w-full max-w-xs">
            <label class="label">
                <span class="label-text">Judul Undangan</span>
                <!-- <span class="label-text-alt">(input judul undangan)</span> -->
            </label>
            <!-- <input type="text" placeholder="Input Judul Undangan" :value="title" @keyup="setTitle" class="input input-bordered w-full max-w-xs" /> -->
            <input type="text" placeholder="Input Judul Undangan" v-model="formCover.title" class="input input-bordered w-full max-w-xs" />
        </div>
        <div class="form-control w-full max-w-xs">
            <label class="label">
                <span class="label-text">Nama Pasangan Laki-laki</span>
            </label>
            <input type="text" placeholder="Input Nama Pasangan Laki-laki" v-model="formCover.man" class="input input-bordered w-full max-w-xs" />
        </div>
        <div class="form-control w-full max-w-xs">
            <label class="label">
                <span class="label-text">Nama Pasangan Wanita</span>
            </label>
            <input type="text" placeholder="Input Nama Pasangan Wanita" v-model="formCover.girl" class="input input-bordered w-full max-w-xs" />
        </div>

        <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">Tampilakn Penerima Undangan</span> 
                <input type="checkbox" :checked="formCover.showInviteTo" v-model="formCover.showInviteTo" class="checkbox checkbox-primary" />
            </label>
        </div>

        <div class="form-control">
            <label class="label">
                <span class="label-text">Pilih Font Cover</span>
            </label>
            <select class="select select-primary w-full max-w-xs" :class="formCover.fontSelected" @change="changeFontFamily">
                <option v-for="item in fontList" :value="item.class_name" :class="item.class_name" :selected="item.is_default">{{item.font_name[0].toUpperCase()+item.font_name.substring(1)}}</option>
            </select>
            <!-- <select class="select select-primary w-full max-w-xs" :class="formCover.fontSelected" @change="changeFontFamily">
                <option value="font-kurale" class="font-kurale" selected>Kurale</option>
                <option value="font-alice" class="font-alice">Alice</option>
                <option value="font-aladin" class="font-aladin">Aladin</option>
                <option value="font-dancing-script" class="font-dancing-script">Dancing Script</option>
                <option value="font-berkshire-swash" class="font-berkshire-swash">Berkshire Swash</option>
            </select> -->
        </div>

        <div class="form-control w-full max-w-xs pt-4">
            <button tipe="button" @click="updateCover()" class="btn btn-active btn-primary">Simpan</button>
        </div>
    </div>    
</template>

<script>
export default {
    computed:{
        ...mapWritableState(useCoverStore,{ title: "getTitleCover", man: 'getCouplesMan', girl: 'getCoupleGirl', showInviteTo: 'getShowInviteTo', fontCover: 'getFontCover', fontList: 'getFontList'}),
        ...mapState(useSvcGenStore, { miftah: 'getMiftah', authheader: 'getAuthGenerally' }),
    },
    methods: {
        ...mapActions(useCoverStore, ['setTitle', 'setCoupleMan', 'setCoupleGirl', 'setShowInviteTo', 'setFontCover', 'setFontList']),
        updateCover(){
            this.setTitle(this.formCover.title);
            this.setCoupleMan(this.formCover.man);
            this.setCoupleGirl(this.formCover.girl);
            this.setShowInviteTo(this.formCover.showInviteTo);
            this.setFontCover(this.formCover.fontSelected);
        },
        changeFontFamily(e){
            this.formCover.fontSelected = e.target.value;
        },
    },
    mounted() {
        this.formCover.title = this.title;
        this.formCover.man = this.man;
        this.formCover.girl = this.girl;
        this.formCover.showInviteTo = this.showInviteTo;
        setTimeout(() => {
            this.setFontList(this.miftah);
        }, 100);
    },
    data() {
        return {
            formCover: {
                title: '',
                showInviteTo: true,
                man: '',
                girl: '',
                fontSelected: 'font-kurale',
            },
            errFontLoad: {},
        }
    },
}
</script>
