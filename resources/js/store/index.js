import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        message: 'Welcome ',
        user: {},
        authenticated: false,
    },
    getters: {
        getMessage(state) {
            return state.message;
        },
        getUser(state) {
            return state.user;
        },
        getAuthenticated(state) {
            return state.authenticated;
        }
    },

    mutations: {
        SET_USER(state, data) {
            state.user = data;
        },

        SET_AUTHENTICATE(state, data) {
            state.authenticated = data;
        },
    }
});

export default store;