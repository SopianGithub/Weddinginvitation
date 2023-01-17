import axios from 'axios';
import { defineStore } from 'pinia'
import { useSvcGenStore } from '../services/general';

export const useCoverStore = defineStore('cover-store', {
    
    state: () => {
      return {
        title: `Undangan Pernikahan`,
        showInviteTo: true,
        couples: {
            man: `Yayan`,
            girl: `Gita`
        },
        covers: [],
        fontCovers: 'font-kurale',
        fontList: [],
        errFontLoad: {},
      }
    },
  
    getters: {
        getTitleCover(state){
            return state.title;
        },
        getShowInviteTo(state){
            return state.showInviteTo;
        },
        getCouplesMan(state){
            return state.couples.man;
        },
        getCoupleGirl(state){
            return state.couples.girl;
        },
        getCovers(state){
            return state.covers;
        },
        getFontCover(state){
            return state.fontCovers;
        },
        getFontList(state){
            return state.fontList;
        },
    },
  
    actions: {
        setTitle(title){
            this.title = title;
        },
        setShowInviteTo(invite){
            this.showInviteTo = invite;
        },
        setCoupleMan(couples){
            this.couples.man = couples;
        },
        setCoupleGirl(couples){
            this.couples.girl = couples;
        },
        setCovers(covers){
            this.covers = covers;
        },
        setFontCover(font){
            this.fontCovers = font;
        },
        async setFontList(miftah){
            await axios.get(`/api/setting/fontlist`, {headers: { Authorization : `Bearer ${miftah}`}} )
                    .then((res) => {
                        this.fontList = res.data;
                    }).catch((err) => this.errFontLoad = err);
        }
    }
  })