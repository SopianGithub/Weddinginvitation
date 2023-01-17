
import { defineStore } from 'pinia';

export const useSvcGenStore = defineStore('service-general-store', {
    state: () => {
        return {
            baseUrlAPI: 'http://127.0.0.1:8000/api/',
            miftah: '',
            motivation: '',
            authGenerally: {},
        }
    },

    getters: {
        getMiftah(state) {
            return state.miftah;
        },
        getMotivation(state) {
            return state.motivation;
        },
        getbaseUrlAPI(state){
            return state.baseUrlAPI;
        },
        getAuthGenerally(state){
            return state.authGenerally
        },
    },

    actions: {
        setMiftah(key){
            this.miftah = key;
        },
        setMotivation(word){
            this.motivation = word;
        },
        setAuthGenerally(miftah){
            this.authGenerally = {headers: { Authorization : `Bearer ${miftah}`}}
        }
    }
});