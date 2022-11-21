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
import CubosService from "../services/Cubos";

var servicio = new CubosService();
export default {
    name: 'ComprarComponent',
    data() {
        return {
            id:"",
            res:{}
        };
    },
    methods:{
        comprar(){
            servicio.comprar(this.id).then(res => {
                res;
            })
        }
    }
};
</script>

<style scoped>

</style>