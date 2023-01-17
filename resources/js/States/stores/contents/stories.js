import { defineStore } from 'pinia'

export const useStoryStore = defineStore('stories-store', {

    state: () => {
        return {
            stories: [
                {
                    tanggal: '',
                    foto: '',
                    notes: ''
                }
            ]
        }
    },

    getters: {

    },

    actions: {

    }

});