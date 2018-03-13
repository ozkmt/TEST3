import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nowuser:{
             nowId:'',
             nowname:''
        },
        img_cover:'',
        p_contain:[],
        show:'true'
        
    },
    getters: {
      
    },
    mutations: {
        changeId (state,obj) {
            state.nowuser.nowId=obj.sid;
            state.nowuser.nowname=obj.username;
            
        },
        sendInfo(state,obj2){
            state.p_contain.push(obj2);
        },
        cleanInfo(state){
            state.p_contain=[];
            state.img_cover='';
        },
        sendCoverImg(state,coverImg){
            state.img_cover=coverImg;
        },
        showDiv(state){
            state.show=!state.show;
            // state.show=!state.show;
        },
        noShowDiv(state){
            state.show=!state.show;
        }
    },
    actions: {
       
    }
})
