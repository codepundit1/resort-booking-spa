<template>
    <div class="container ">
        <div class="row">
             <h4 class="text-center p-4">Book Resort Now !</h4>



            <div class="col-md-4 p-3" v-for="(resort ) in resorts" :key="resort.id">
                <div class="card" style="width: 18rem">
                   <div style="max-width:450px; max-height:450px; overflow: hidden;">
                        <img :src="resort.image" class="img-fluid">
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">{{ resort.name }}</h3>
                        <p class="text-muted">Amount of Taka Per Day {{ resort.price }}</p>
                        <p class="card-text">
                           {{ resort.description }}
                        </p>

                        <button @click="$router.push('/booking/create')"  class="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>


         <!-- <tr v-for="(resort, index ) in resorts" :index="index" :key="resort.id" >
                                    <td>{{ index+1}}</td>
                                    <td>
                                        <div style="max-width:60px; max-height:60px; overflow: hidden;">
                                            <img :src="resort.image" class="img-fluid">
                                        </div>
                                    </td>
                                    <td>{{ resort.name }}</td>
                                    <td>{{ resort.location }}</td>
                                    <td>{{ resort.price }}  </td>
                                    <td>{{ resort.description }}</td>
                                    <td>
                                        <router-link  :to="{name:'edit-resort', params:{id:resort.id}}" class="btn btn-primary btn-sm"><i class="fa-solid fa-pen-to-square"></i></router-link>
                                        <a @click.prevent="deleteResort(resort)" href="#" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash"></i></a>
                                    </td>
                                </tr> -->
    </div>



</template>

<script>
    export default {

        data(){
            return{
                resorts:[]
            }
        },



        methods: {
            loadResorts(){
                axios
                .get('/api/resort').then(response => {
                    this.resorts = response.data;
                });
            },


            deleteResort(resort){
                axios.delete(`/api/resort/${resort.id}`).then(() => {
                    this.$toast.success({
                        title:'Success!',
                        message:'resort deleted successfully.'
                    });
                });

            let index = this.resorts.indexOf(resort);
            this.resorts.splice(index, 1);
        }
        },

        mounted(){
            this.loadResorts();
        },


    }
</script>
