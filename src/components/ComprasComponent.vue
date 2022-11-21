<template>
    <div>
        <h1>Compras</h1>
        <h2 v-if="compras.length == 0" style="color: red">No hay compras</h2>
        <table class="table table-striped">
            <thead>
                <th>IdCubo</th>
                <th>Fecha</th>
            </thead>
            <tbody>
                <tr v-for="comp in compras" :key="comp">
                    <td>{{comp.idCubo}}</td>
                    <td>{{comp.fechaPedido}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import CubosService from "../services/Cubos";

var servicio = new CubosService();
export default {
    name: "ComprasComponent",
    data() {
        return {
            compras: [],
        };
    },
    mounted() {
        servicio.getCompras().then((res) => {
            this.compras = res;
        });
    },
};
</script>

<style scoped></style>
