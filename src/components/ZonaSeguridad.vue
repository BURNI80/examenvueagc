<template>
    <div>
        <h1>Zona De Seguridad</h1>
        <div class="dropdown">
            <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Opciones
            </button>
            <ul class="dropdown-menu">
                <li>
                    <router-link class="dropdown-item" to="/perfil"
                        >Ver Perfil</router-link
                    >
                </li>
                <li>
                    <router-link class="dropdown-item" to="/compras"
                        >Mostrar Compras</router-link
                    >
                </li>
                <li>
                    <router-link class="dropdown-item" to="/comprar"
                        >Comprar</router-link
                    >
                </li>
            </ul>
            <br />
            <button v-on:click="cerrarSesion()" class="btn btn-danger">
                Cerrar Sesion
            </button>
        </div>
    </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
    name: "ZonaSeguridad",
    data() {
        return {};
    },
    methods: {
        cerrarSesion() {
            Cookies.remove("token");
            this.$router.push("/login");
        },
    },
};
</script>

<style scoped></style>
