<template>
    <div class="container" style="width: 40%">
        <h1>Registro</h1>
        <form @submit.prevent="registro()">
            <label class="form-label">Nombre: </label>
            <input class="form-control" type="text" v-model="nombre" />
            <label class="form-label">Email: </label>
            <input class="form-control" type="text" v-model="email" />
            <label class="form-label">Contraseña: </label>
            <input class="form-control" type="password" v-model="pass" />
            <button class="btn btn-primary">Registrarse</button>
        </form>
    </div>
</template>

<script>
import CubosService from "../services/Cubos";
var servicio = new CubosService();
export default {
    name: 'RegistroComponent',
    data() {
        return {
            email: "",
            pass: "",
            nombre:"",
        };
    },
    methods:{
        registro(){
            servicio.registro(this.nombre,this.email,this.pass).then(res => {
                res;
                this.$router.push("/login")
            })
        }
    }
};
</script>

<style scoped>

</style>