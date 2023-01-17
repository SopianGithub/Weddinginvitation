<script setup>
    import { mapActions, mapWritableState } from 'pinia';
    import { useCoupleStore } from '../../../States/stores/contents/couples';
</script>
<template>
    <div class="flex flex-col gap-2">
        <div class="form-control w-full max-w-xs">
            <label class="label">
                <span class="label-text">Judul Page Calon Mempelai</span>
            </label>
            <input type="text" v-model="formCouple.titlePage" placeholder="Input Page Calon Mempelai" class="input input-bordered w-full max-w-xs" />
        </div>

        <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">Urutkan Pria terlbih dahulu</span> 
                <input type="checkbox" class="checkbox checkbox-primary" />
            </label>
        </div>

        <div class="flex w-full sm:flex-col lg:flex-row md:flex-row">
            <div class="grid flex-grow card bg-base-300 rounded-box place-items-center">
                
                <div class="card">
                    <h3 class="card-title">Profil Calon Pria</h3>
                    <div class="card-body">
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Nama Calon Pria</span>
                            </label>
                            <input type="text" v-model="formCouple.couples.pria.nama_lengkap" placeholder="Input Nama Calon Pria" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Foto Calon Pria</span>
                            </label>
                            <input type="file" accept="image/*" placeholder="Input Judul Undangan" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Anak Ke-</span>
                            </label>
                            <input type="text" v-model="formCouple.couples.pria.anak_ke" placeholder="Input Anak Ke berapa dalam jumalh sodara" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Nama Ayah</span>
                            </label>
                            <input type="text" v-model="formCouple.couples.pria.nama_ayah" placeholder="Input Nama Ayah" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Nama Ibu</span>
                            </label>
                            <input type="text" v-model="formCouple.couples.pria.nama_ibu" placeholder="Input Nama Ibu" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Alamat</span>
                            </label>
                            <textarea class="textarea" v-model="formCouple.couples.pria.alamat_rumah" placeholder="Alamat"></textarea>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="divider divider-horizontal"></div>
            <div class="grid flex-grow card bg-base-300 rounded-box place-items-center">

                <div class="card">
                    <h3 class="card-title">Profil Calon Wanita</h3>
                    <div class="card-body">
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Nama Calon Wanita</span>
                            </label>
                            <input type="text" v-model="formCouple.couples.wanita.nama_lengkap" placeholder="Input Nama Calon Wanita" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Foto Calon Wanita</span>
                            </label>
                            <input type="file" accept="image/*" placeholder="Input Judul Undangan" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Anak Ke-</span>
                            </label>
                            <input type="text" v-model="formCouple.couples.wanita.anak_ke" placeholder="Input Anak ke berapa dalam sodara" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Nama Ayah</span>
                            </label>
                            <input type="text" v-model="formCouple.couples.wanita.nama_ayah" placeholder="Input Nama Ayah" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Nama Ibu</span>
                            </label>
                            <input type="text" v-model="formCouple.couples.wanita.nama_ibu" placeholder="Input Nama Ibu" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Alamat</span>
                            </label>
                            <textarea class="textarea" v-model="formCouple.couples.wanita.alamat_rumah" placeholder="Alamat"></textarea>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="form-control w-full max-w-xs pt-4 mb-8">
            <button tipe="button" @click="updateProfil" class="btn btn-active btn-primary">Simpan</button>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        ...mapWritableState(useCoupleStore, {titleCouples: 'getTitleCouple', couplelist: 'getCouple'}),
    },
    methods: {
        ...mapActions(useCoupleStore, ['setTitleCouple', 'setCouple']),
        updateProfil(){
            this.setTitleCouple(this.formCouple.titlePage);
            this.setCouple(this.formCouple.couples);
        }
    },
    mounted() {
        this.formCouple.titlePage = this.titleCouples;
        this.formCouple.couples = this.couplelist;
    },
    data() {
        return {
            formCouple: {
                titlePage: '',
                orderingMan: false,
                couples: {
                    pria: {
                        nama_lengkap: '',
                        foto: '',
                        alamat_ig: '',
                        alamat_rumah: '',
                        nama_ibu: '',
                        nama_ayah: '',
                        anak_ke: 0,
                    },
                    wanita: {
                        nama_lengkap: '',
                        foto: '',
                        alamat_ig: '',
                        alamat_rumah: '',
                        nama_ibu: '',
                        nama_ayah: '',
                        anak_ke: 0,
                    }
                }
            
            }
        }
    },
}
</script>