import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        message: 'Welcome ',
        user: {},
    },
    getters: {
        getMessage(state) {
            return state.message;
        },
        getUser(state) {
            return state.user;
        }
    },

    mutations: {
        SET_USER(state, data) {
            state.user = data;
        }
    }
});

export default store;