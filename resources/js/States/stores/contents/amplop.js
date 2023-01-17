import { defineStore } from 'pinia'

export const useAmplopStore = defineStore('amplop-store', {

    state: () => {
        return {
            isEnabled: true,
            listOfBank: [],
            changeBank: [
                {
                    nomor: '',
                    nama: '',
                    provide: ''
                }
            ]
        }
    },

    getters: {

    },

    actions: {

    }

});