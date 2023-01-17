import { defineStore } from 'pinia'

export const useDeviceStore = defineStore('divices-store', {
  state: () => {
    return {
        deviceTabs: {
            phone: false,
            tablet: false,
            computer: true
        },
    }
  },

  getters: {
    results(state) {
      return state.deviceTabs;
    },
  },

  actions: {
    setDeviceTabs(deviceTabs) {
        for (let key in this.deviceTabs) {
            if(key == deviceTabs) {
                this.deviceTabs[key] = true;
            }else{
                this.deviceTabs[key] = false;
            }
        }
    },
  }
})