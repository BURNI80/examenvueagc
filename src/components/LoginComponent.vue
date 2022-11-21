<template>
    <div class="container" style="width: 40%">
        <h1>Login</h1>
        <form @submit.prevent="login()">
            <label class="form-label">Email: </label>
            <input class="form-control" type="text" v-model="email" />
            <label class="form-label">Contraseña: </label>
            <input class="form-control" type="password" v-model="pass" />
            <button class="btn btn-primary">Iniciar sesion</button>
            <router-link to="/registro" class="btn btn-warning">Registrarse</router-link>
        </form>
    </div>
</template>

<script>
import CubosService from "../services/Cubos";
import Cookies from "js-cookie";

var servicio = new CubosService();
export default {
    name: "LoginComponent",
    data() {
        return {
            email: "",
            pass: "",
        };
    },
    methods: {
        login() {
            servicio.login(this.email, this.pass).then((res) => {
                res;
                this.$router.push("/zonaseguridad")
            });
        },
    },
    mounted(){
       if (Cookies.get("token") != undefined){
                this.$router.push("/zonaseguridad")
       }
    }
};
</script>

<style scoped></style>
