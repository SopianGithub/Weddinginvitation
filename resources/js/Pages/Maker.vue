<script setup>
    import { useSvcGenStore } from "../States/stores/services/general"
    import { useMakerStore } from "../States/stores/maker"
    import { useCoverStore } from "../States/stores/contents/covers";
</script>

<template data-theme="night">
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Homepage</a></li>
                <li><a>Portfolio</a></li>
                <li><a>About</a></li>
            </ul>
            </div>
        </div>
        <div class="navbar-center">
            <a class="btn btn-ghost normal-case text-xl">Gista</a>
        </div>
        <div class="navbar-end">
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                    <a class="justify-between">
                        {{ girl }} & {{ man }}
                        <span class="badge">
                            <icons name="link" class="mt-1 mr-1" :size="iconSizeLink"></icons>
                        </span>
                    </a>
                    </li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="container mx-auto">
        <div class="alert alert-warning shadow-lg">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <div>
                <h3 class="font-bold">Website Undangan kamu <b>belum aktif</b>!</h3>
                <div class="text-xs">Masa percobaan Tersisa 2 hari, 7 jam, 25 menit, 38 detik lagi</div>
                </div>
            </div>
            <div class="flex-none">
                <button class="btn btn-sm">Upgrade Paket</button>
            </div>
        </div>
    </div>

    <div class="mx-auto">
        <div class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <input type="checkbox" class="peer" :checked="isShowConfig" /> 
            <div class="collapse-title text-xl font-medium" @click="setShowConfig()">
                Konfigurasi Undangan
            </div>
            <div class="collapse-content h-96"> 

                <div class="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content flex flex-col h-96 overflow-y-auto">
                        <div class="flex flex-col gap-2">
                            <div>
                                <label for="my-drawer-2" class="btn btn-secondary drawer-button lg:hidden absolute right-2">
                                    <icons name="adjustments-horizontal" class="text-center" :size="iconSizeConfig"></icons> 
                                </label>
                            </div>
                            <div class="h-96 overflow-y-auto ml-8">
                                <configrations :slot="contentActive"></configrations>
                            </div>
                        </div>
                        <!-- Page content here -->
                        
                        <!-- 
                            1. tampilan
                                - Pilih Preset
                                - Pilihan Gambar yang tidak di compress
                                - Pilihan Warna
                                - Font Judul
                                - Font Content
                                - Pengurutan elements
                            2. Cover
                                - Title Cover
                                - Nama Panggilan Pria
                                - Nama Panggilan Wanita
                                - Pilihan Cover
                            3. Profil pasangan
                                - Change Title "Nama Pasangan"
                                - Urutkan pasangan lk atau pr dulu, hilangkan foto profil, hilangkan info orangtua
                                - Layout Profil
                                - Calon Mempelai (Foto, IG, Nama Lengkap, Anak ke, Nama Ayah, Nama Ibu, Alamat)
                            4. Quote
                                - Foto Berdua
                                - Gunakan ilustrasi pilihan
                                - Ucapan, harapan, quotes
                                - Pilihan Quotes Default
                                - Dekorasi Quotes
                            5. Detail Undangan
                                - Set Private Wedding
                                - Title Hitungan Mundur
                                - Tanggal acara pernikahan
                                - Zona Waktu
                                - Alamat Lokasi Acara
                                - Cari Alamat di MAPS
                                - Link Lokasi Google Maps
                                - Waktu & Tempat Akad 
                                - Waktu & Tempat Resepsi
                                - Protokol Kesehatan
                                - Kata Penutup / Terima kasih
                                - Catatan Khusus
                            6. Gallery
                                - Title 
                                - Descriptions
                                - Embed Video
                                - Gallery Foto
                                - Mode Gallery
                            7. Love Stories
                                - Add Text Cerita
                            8. Live Streaming
                                - Aktifkan fitur
                                - Url Live Streaming
                                - Live Streaming Info
                            9. Amplop Digital
                                - Manage Nomor Rekening
                                - Disable Amplop digital
                            10. Backsound
                                - Pilihan Disable
                                - Pilihan default
                                - Upload Self
                            11. Custom Domain
                                - Masukan Nama Domain
                                - Biaya tambahan Domain
                                - Arahkan pointing domain
                            12, Kiriman Ucapan
                                - Pilihan Disable
                                - List Ucapaan
                            13. Respon Undangan
                                - Disable RSVP 
                                - Sembunyikn jumlah tamu yang akan datang
                            14. Daftar Tamu
                                - Jumlah Maksimal Tamu
                                - Matikan buku tamu

                        -->
                    </div> 
                    <div class="drawer-side h-96 overflow-y-auto">
                        <label for="my-drawer-2" class="drawer-overlay"></label> 
                        <ul class="menu p-4 w-80 bg-base-100 text-base-content">
                            <li v-for="item in contents">
                                <a @click="setActiveContent(item.name)" :class="item.name === contentActive ? 'bg-gray-500': ''">
                                    <icons :name="item.icon" class="text-center" :size="iconSizeConfig"></icons> {{ item.name }}
                                </a>
                            </li>
                        </ul>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>

    <devices></devices>

</template>

<script>
import icons from "../Icons/Index.vue";
import devices from "../States/components/Devices/Index.vue";
import configrations from "../Components/Maker/Configs.vue";
import { mapActions, mapState } from 'pinia';

export default {
    props: {
        generallyAPIKey: String,
        generallySecretKeyAPI: String,
    },
    components: {
        icons,
        devices
    },
    data() {
        return {
            isShowConfig: false,
            iconSizeLink: {
                height: 4,
                width: 4
            },
            iconSizeConfig: {
                height: 6,
                width: 6
            },
        }
    },
    computed: { 
        ...mapState(useMakerStore, { contents: 'getContents', contentActive: 'getActiveContent'}),
        ...mapState(useCoverStore, {man: 'getCouplesMan', girl: 'getCoupleGirl'}),
        ...mapState(useSvcGenStore,{miftah: 'getMiftah', motivation: 'getMotivation', authheader: 'getAuthGenerally'}),
    },
    methods: {
        ...mapActions(useMakerStore, ['setContentSetting', 'setActiveContent']),
        ...mapActions(useSvcGenStore, ['setMiftah', 'setMotivation', 'setAuthGenerally']),
        setShowConfig(){
            this.isShowConfig = !this.isShowConfig;
        }
    },
    mounted() {
        this.setMiftah(this.generallyAPIKey);
        this.setMotivation(this.generallySecretKeyAPI);
        this.setAuthGenerally(this.generallyAPIKey);
        this.setContentSetting(this.authheader);
    },
}
</script>