import { defineStore } from 'pinia'

export const useThemeStore = defineStore('themes-store', {
  state: () => {
    return {
        color: ``,
        fontTitle: ``,
        fontContent: ``,
        orderingContent: [],
        compressedImage: false,
        fontList: []
    }
  },

  getters: {
    results(state) {
      return state.orderingContent;
    },
  },

  actions: {
    setDeviceTabs(deviceTabs) {
        for (let key in this.orderingContent) {
            if(key == deviceTabs) {
                this.deviceTabs[key] = true;
            }else{
                this.deviceTabs[key] = false;
            }
        }
    },
  }
})