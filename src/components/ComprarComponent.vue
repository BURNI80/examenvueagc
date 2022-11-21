<template>
    <div class="container" style="width: 40%">
        <h1>Comprar</h1>
        <form @submit.prevent="comprar()">
            <label class="form-label">ID cubo: </label>
            <input class="form-control" type="text" v-model="id" />
            <button class="btn btn-primary">Comprar</button>
        </form>
    </div>
</template>

<script>
import Cookies from "js-cookie";
import CubosService from "../services/Cubos";

var servicio = new CubosService();
export default {
    name: 'ComprarComponent',
    data() {
        return {
            id:"",
        };
    },
    methods:{
        comprar(){
            servicio.comprar(this.id).then(res => {
                res;
                this.$router.push("/zonaseguridad")
            })
        }
    },
    mounted(){
        if(Cookies.get("token") == undefined){
            this.$router.push("/login")

        }
        this.id = this.$route.params.id
    }
};
</script>

<style scoped>

</style>