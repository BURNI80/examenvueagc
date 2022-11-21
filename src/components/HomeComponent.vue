<template>
    <div>
        <h1>Cubos</h1>
        <h1 v-if="marca != ''" >Marca: {{marca}}</h1>

        <div
            v-for="cubo in cubos"
            :key="cubo"
            class="card"
            style="width: 20%; float: left"
        >
            <img :src="cubo.imagen" class="card-img-top" style="height:200px; width: 200px; margin:auto" />
            <div class="card-body">
                <h5 class="card-title">{{ cubo.nombre }}</h5>
                <p class="card-text" style="color: blue">{{ cubo.precio }}€</p>
                <router-link :to="'/cubo/'+cubo.idCubo" class="btn btn-primary">Detalles</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import CubosService from "../services/Cubos";
var servicio = new CubosService();

export default {
    name: "HomeComponent",
    data() {
        return {
            marca: "",
            cubos: [],
        };
    },
    methods: {
        cargarCubos() {
            this.marca = this.$route.params.marca;
            if (this.marca == "") {
                servicio.getCubos().then((res) => {
                    this.cubos = res;
                });
            } else {
                servicio.getCubosMarca(this.marca).then((res) => {
                    this.cubos = res;
                });
            }
        },
    },
    mounted() {
        this.cargarCubos();
    },
    watch: {
        "$route.params.marca"(nextVal, oldVal) {
            if (nextVal != oldVal) {
                this.cargarCubos();
            }
        },
    },
};
</script>

<style scoped></style>
