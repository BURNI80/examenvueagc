<template>
    <div>
        <h1>Prfil</h1>
        <div>
            <h3>Email: {{perfil.email}}</h3>
            <h3>Nombre: {{perfil.nombre}}</h3>
            <h3>Pass {{perfil.pass}}</h3>
        </div>
    </div>
</template>

<script>
import CubosService from "../services/Cubos";

var servicio = new CubosService();
export default {
    name: 'PerfilComponent',
    data() {
        return {
            perfil:{}
        };
    },
    mounted(){
        servicio.getPerfil().then(res => {
            this.perfil = res;
        })
    }
};
</script>

<style scoped>

</style>