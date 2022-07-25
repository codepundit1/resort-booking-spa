<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header text-center">Dashboard</div>
                    <div class="card-body">
                        Hello! {{ user.name }} Welcome to Dashboard
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        user(){
            return this.$store.getters.getUser;
        }

    },
    mounted() {
        console.log("Component mounted.");
    },
};
</script>
