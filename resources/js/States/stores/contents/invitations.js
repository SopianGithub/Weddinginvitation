import { defineStore } from 'pinia'

export const useInvitationStore = defineStore('invitations-store', {

    state: () => {
        return {
            isPrivate: false,
            countDown: false,
            prokes: false,
            kataPenutup: '',
            addNotes: '',
            events: {
                akad: {
                    tanggal: '',
                    waktu: '',
                    zonawaktu: '+7',
                    tempat: {
                        alamat: '',
                        longitude: '',
                        latitude: ''
                    }
                },
                resepsi: {
                    tanggal: '',
                    waktu: '',
                    zonawaktu: '+7',
                    tempat: {
                        alamat: '',
                        longitude: '',
                        latitude: ''
                    }
                },
                unduhMantu: {
                    tanggal: '',
                    waktu: '',
                    zonawaktu: '+7',
                    tempat: {
                        alamat: '',
                        longitude: '',
                        latitude: ''
                    }
                }
            }
        }
    },

    getters: {

    },

    actions: { 

    }
});