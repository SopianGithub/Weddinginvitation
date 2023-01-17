import { defineStore } from 'pinia'

export const useCoupleStore = defineStore('couples-store', {
  state: () => {
    return {
        titleCouples: 'Calon Mempelai',
        layoutList: [],
        couples: { 
          pria: {
            nama_lengkap: 'Yayan Sopian',
            foto: '',
            alamat_ig: '',
            alamat_rumah: 'Kp. Tanjungsari 07/02 Ds. Pamoyanan Kec. Kadipaten Kab. Tasikmalaya',
            nama_ibu: 'Ibu Omah',
            nama_ayah: 'Alm. Bpk Nono Waryono',
            anak_ke: 3,
          },
          wanita: {
            nama_lengkap: 'Gita Thohiroturrohmah',
            foto: '',
            alamat_ig: '',
            alamat_rumah: 'Kp. Pamipiran 02/04 Ds. Pagersari Kec. Pagerageung Kab. Tasikmalaya',
            nama_ibu: 'Ibu Nonoh',
            nama_ayah: 'Bpk Totong',
            anak_ke: 3,
          }
        },
        settings: {
            info_ortu: true,
            foto_profile: true,
            orderingCouplesLk: false,
            layoutProfilCouples: '',
        }
    }
  },

  getters: {
    getTitleCouple(state) {
      return state.titleCouples;
    },
    getCouple(state){
      return state.couples;
    },
  },

  actions: {
    setTitleCouple(prm) {
        this.titleCouples = prm;
    },
    setCouple(couple){
      this.couples = couple;
    },
    setOrdering() {
        this.settings.orderingCouplesLk = !this.settings.orderingCouplesLk;
    },
    setlayoutList() {

    }
  }
})