<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <router-link class="navbar-brand" :to="{name:'home'}">Resort-Booking</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'home'}"
                            >Home</router-link
                        >
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" v-if="auth" :to="{name:'dashboard'}">Dashboard</router-link>

                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" v-if="auth" :to="{name:'resort-list'}">Resort</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" v-if="auth" :to="{name:'booking-list'}">Booking</router-link>

                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'login'}">Login</router-link>

                    </li>


                     <li class="nav-item">
                        <a href="" class="nav-link" v-if="auth" @click.prevent="logout">Logout</a>

                    </li>

                </ul>

            </div>
        </div>
    </nav>
</template>

<script>
export default {

    computed: {
        auth(){
            return this.$store.getters.getAuthenticated;
        }

    },
    methods: {
         logout() {
            axios.post('/logout').then(response => {
                this.$router.push({name: 'home'});
            });
        }
    },

}
</script>

<style></style>
