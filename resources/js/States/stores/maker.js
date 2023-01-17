import axios from 'axios';
import { defineStore } from 'pinia';
import { useSvcGenStore } from './services/general';

export const useMakerStore = defineStore('maker-store', {
  state: () => {
    return {
        contentShow: ``,
        contentSetting: [],
        contentActive: 'Cover',
        erroReport: [],
    }
  },

  getters: {
    getContents(state) {
      return state.contentSetting;
    },
    getActiveContent(state) {
        return state.contentActive;
    },
  },

  actions: {
    async setContentSetting(authSetting) {
        await axios.get(`/api/setting/contents`, authSetting)
            .then(response => { 
                this.contentSetting = response.data;
             })
            .catch(error => {   console.error(error); });
    },
    setActiveContent(content) {
        this.contentActive = content;
    },
  }
})