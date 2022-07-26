<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-item-center">
                        <h5 class="mb-0">Create Booking</h5>
                        <router-link :to="{name:'Booking-list'}" class="btn btn-primary">Back</router-link>
                    </div>

                    <div class="card-body">
                        <form @submit.prevent="createBooking" @keydown="form.onKeydown($event)">

                                <!-- <div class="col form-group mb-3">
                                    <label for="" class="form-label">Choosen Resort</label>
                                    <input type="text" class="form-control" id="" placeholder="" >
                                </div> -->
                            <div class="row">
                                 <div class="col form-group mb-3">
                                    <label for="" class="form-label">Full Name</label>
                                    <input type="text" v-model="form.fullname" class="form-control" id="" placeholder="Enter your name">
                                    <div v-if="form.errors.has('fullname')" v-html="form.errors.get('fullname')" />
                                </div>
                            </div>
                               <!-- <div class="col form-group mb-3">
                                    <label for="" class="form-label">Email</label>
                                    <input type="email" v-model="form.email" class="form-control" id="" placeholder="Enter your email">
                                    <div v-if="form.errors.has('email')" v-html="form.errors.get('email')" />

                                </div>
                            </div>

                            <div class="row">
                               <div class="col form-group mb-3">
                                    <label for="" class="form-label">From</label>
                                    <input type="date" v-model="form.startdate" class="form-control"  />


                                </div>

                                <div class="col form-group mb-3">
                                    <label for="" class="form-label">To</label>
                                    <input type="date" v-model="form.enddate" class="form-control"  />


                                </div>
                            </div>

                             <div class="row">

                                <div class="col form-group mb-3">
                                    <label for="" class="form-label">Phone</label>
                                    <input type="text" v-model="form.phone" class="form-control"  />
                                    <div v-if="form.errors.has('phone')" v-html="form.errors.get('phone')" />

                                </div>
                                <div class="col form-group mb-3">
                                    <label for="" class="form-label">Message</label>
                                    <textarea class="form-control"  v-model="form.message" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                             </div> -->


                            <div class="">
                                <button type="submit"  href="#" class="btn btn-primary">Add</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { Form } from 'vform'
import { objectToFormData } from 'object-to-formdata'

export default {
    data(){
        return {
            form: new Form({
                fullname: '',

            }),
        }
    },
    methods: {
        create(){
            this.form.post('/api/resort' , {
                    transformRequest: [function (data, headers) {
                        return objectToFormData(data)
                    }],
                    onUploadProgress: e => {
                        // Do whatever you want with the progress event
                        console.log(e)
                    }
                }).then(({ data }) => {


                this.form.name = '';

                // message

            })
        },


        onImageChange(e){
             const file = e.target.files[0]
            // Do some client side validation...
            this.form.image = file
        }
    }
}
</script>




<!--
<script>
import { Form } from 'vform'
import { objectToFormData } from 'object-to-formdata'

export default {
    data(){
        return {
            form: new Form({
                fullname: '',
                // email: '',
                // startdate: '',
                // enddate: '',
                // phone: '',
                // message: '',
            }),
        }
    },
    methods: {
        createBooking(){
            this.form.post('/api/booking').then(({ data }) => {

                console.log('success');
                this.form.fullname = '';
                // this.form.email = '';
                // this.form.startdate = '';
                // this.form.enddate = '';
                // this.form.phone = '';
                // this.form.message = '';

                // message

            })
        },


    }
}
</script>



 -->
