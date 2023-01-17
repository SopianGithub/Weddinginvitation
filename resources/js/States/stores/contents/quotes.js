import { defineStore } from 'pinia'

export const useQuoteStore = defineStore('quotes-store', {
    state: () => {
      return {
        fotoCouples: '',
        listIlustration: [],
        quotes: {
            ucapan:'',
            harapan: '',
            quotes: '',
        },
        quoteDefault: '',
        listDesign: [],
        selectDesign: ''
      }
    },

    getters: {

    },

    actions: {

    },
})