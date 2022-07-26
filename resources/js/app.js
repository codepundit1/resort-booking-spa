require('./bootstrap');
import Vue from 'vue';
import routes from './router/index';
import store from './store/index';


// import CxltToastr from 'cxlt-vue2-toastr'
// import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
// var toastrConfigs = {
//     position: 'top right',
//     showDuration: 2000
// }
// Vue.use(CxltToastr, toastrConfigs)


Vue.component('app-header', require('./components/Header.vue').default);

// check authentication
let auth = localStorage.getItem("auth");

if (auth) {
    store.dispatch('authUser').then(() => {
        const app = new Vue({
            el: '#app',
            router: routes,
            store,
        });
    });
} else {
    const app = new Vue({
        el: '#app',
        router: routes,
        store,
    });
}