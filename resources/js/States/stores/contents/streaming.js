import { defineStore } from 'pinia'

export const useStramingStore = defineStore('streaming-store', {

    state: () => {
        return {
            isEnabled: true,
            urlVideo: ``,
            notes: '',
        }
    },

    getters: {

    },

    actions: {
        
    }

});