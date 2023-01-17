import { defineStore } from 'pinia'

export const useGalleryStore = defineStore('galleries-store', {

    state: () => {  
        return {
            title: ``,
            description: ``,
            urlVideo: '',
            gallery: [],
            ordering: '',
        }
    },

    getters: {  

    },

    actions: {
        
    }

});