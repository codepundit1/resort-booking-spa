import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        message: 'Wellcome nanna munna',
    },
    getters: {
        getMessage(state) {
            return state.message;
        }
    }
});

export default store;