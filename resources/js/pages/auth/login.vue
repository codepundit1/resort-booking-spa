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


                                <form action="" method="post" @click.prevent="login()">

                                    <div class="form-group">
                                        <label for="">Email</label>
                                        <input type="text" class="form-control mb-3" placeholder="email">
                                        <!-- <div v-if="form.errors.has('email')" v-html="form.errors.get('email')" /> -->

                                    </div>

                                     <div class="form-group">
                                        <label for="">Password</label>
                                        <input type="password" class="form-control mb-3" placeholder="email">
                                        <!-- <div v-if="form.errors.has('password')" v-html="form.errors.get('password')" /> -->

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

export default{
    methods: {
        login(){
            axios.get('/sanctum/csrf-cookie').then(response => {
                console.log('hell0');

                axios.post('/login', {
                    email: 'jahidhasanshiplo4@gmail.com',
                    password: '12345678',
                }).then(response=>{
                    console.log(response);

                });
            });
        },

        getUserData(){
            axios.get('/api/user').then(response => {
                console.log(response.data);
            });
        }
    },

    mounted(){
        this.getUserData();
    }
}

// import { Form } from 'vform'

// export default {
//     data(){
//         return {
//             form: new Form({
//                 email: 'jahidhasanshiplo4@gmail.com',
//                 password: '12345678',
//             }),
//         }
//     },
//     methods: {
//         async login(){
//             await axios.get('/sanctum/csrf-cookie')
//             await this.form.post('/login')
//             await this.getUserData();

//             this.$toast.success({
//                 title:'Success!',
//                 message:'Welcome, Dear!'
//             });

//             this.$router.push({ name: 'dashboard' });
//         },
//         async getUserData(){
//             await axios.get('/api/user').then(response => {
//                 let user = response.data;
//                 this.$store.commit('SET_USER', user);
//                 this.$store.commit('SET_AUTHENTICATED', true);

//                 localStorage.setItem("auth", true);
//             });
//         }
//     },
//     mounted(){
//         this.getUserData();
//     }
// }
</script>
