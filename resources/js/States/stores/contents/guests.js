import { defineStore } from 'pinia'

export const useGuestStore = defineStore('guest-store', {

    state: () => {
        return {
            countOfGuest: 0,
            MaxGuest: 0,
            noSeenGuest: false,
            listOfGuest: [],
            inviteGuest: '',
            inviteAddress: 'Tempat',
        }
    },

    getters: {
        getInviteGuest(state){
            return state.inviteGuest;
        },
        getInviteAddress(state){
            return state.inviteAddress;
        },
        getlistComment(state){
            return state.listComment;
        },
    },

    actions: {
        setInviteGuest(guest){
            this.inviteGuest = guest;
        },
        setInviteAddress(address){
            this.inviteAddress = address;
        },
    }

});