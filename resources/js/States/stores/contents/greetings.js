import { defineStore } from 'pinia'
import axios from 'axios';

export const useGreetingStore = defineStore('greetings-store', {

    state: () => {
        return {
            isEnabled: true,
            listOfGreetings: [],
            postGreetings: {
                name: '',
                tanggal: '',
                ucapan: '',
                hadir: false,
            },
            postComment: false,
            postNotif: {},
            errNotif: {},
            loading: false,
        }
    },

    getters: {
        getlistOfGreetings(state){
            return state.listOfGreetings;
        },
        getLoadingState(state) {
            return state.loading;
        },
    },

    actions: {
        setlistOfGreetings(grreting){
             this.listOfGreetings = grreting;
        },
        submitComment(data, miftah){
            this.loading = true;
            axios.post(`/api/invited/greetings`, 
                data,
                {
                    headers: { 
                        Authorization : `Bearer ${miftah}`
                    },
                } )
                .then((res) => {
                    if(res.statusCode !== 200){
                        this.postNotif = res.data;
                    }else{
                        this.postNotif = res;
                    }
                }).catch((err) => this.errFontLoad = err);
            
            this.loading = false;
        },
        async loadComments(id = 1, miftah){
            this.loading = true;
            await axios.get(`/api/invited/greetings/${id}`,{
                headers: { 
                    Authorization : `Bearer ${miftah}`,
                },  
            }).then((res)=> {
                if(res.statusCode !== 200){
                    this.listOfGreetings = res.data;
                }else{
                    this.errNotif = res;
                }
            }).catch((err) => this.errNotif = err);
            this.loading = false;
        },
    }

});