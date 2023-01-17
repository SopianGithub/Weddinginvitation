import { defineStore } from 'pinia'

export const useSoundStore = defineStore('sounds-store', {

    state: () => {
        return {
            isEnabled: true,
            listOfSound: [],
            isCustome: false,
            customeSound: ``,
        }
    },

    getters: {

    },

    actions: {

    }

});