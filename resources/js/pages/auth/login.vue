<template>
    <div>
        <div class="container">
            <div class="py-5">
                <div class="row">
                    <div class="col-6 offset-3">
                        <div class="card card-default">
                            <div class="card-header">
                                Login
                            </div>
                            <div class="card-body">


                                <form action="" method="post" @submit.prevent="login()">

                                    <div class="form-group">
                                        <label for="">Email</label>
                                        <input type="text" v-model="Loginform.email" class="form-control mb-3" placeholder="email">
                                        <div v-if="Loginform.errors.has('email')" v-html="Loginform.errors.get('email')" />

                                    </div>

                                     <div class="form-group">
                                        <label for="">Password</label>
                                        <input type="password" v-model="Loginform.password" class="form-control mb-3" placeholder="email">
                                        <div v-if="Loginform.errors.has('password')" v-html="Loginform.errors.get('password')" />

                                    </div>

                                     <div class="form-group">
                                        <button type="submit" class="btn btn-success px-4">Login</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Form } from 'vform'
export default{


     data(){
        return {
            Loginform: new Form({
                email: 'jahidhasanshiplo4@gmail.com',
                password: '12345678',
            }),
        }
    },
    methods: {
        login(){
            axios.get('/sanctum/csrf-cookie').then(response => {
                this.Loginform.post('/login').then(response=>{
                    this.getUserData();
                    this.$router.push({name: 'dashboard'});

                });
            });
        },

        getUserData(){
            axios.get('/api/user').then(response => {
                let user = response.data;
                this.$store.commit('SET_USER', user);
                this.$store.commit('SET_AUTHENTICATED', true);

                localStorage.setItem("auth", true);
            });
        }
    },

    mounted(){

    }
}

</script>
