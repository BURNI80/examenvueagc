<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <img class="navbar-brand" src="../assets/cubo.png" style="height:60px"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/" >Cubos</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marcas
          </a>
          <ul class="dropdown-menu">
            <li v-for="m in marcas" :key="m" ><router-link class="dropdown-item" :to="'/'+m">{{m}}</router-link></li>
          </ul>
          
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/login" >Zona de Seguridad</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
import CubosService from "../services/Cubos";
var servicio = new CubosService();
export default {
    
    name: 'MenuComponent',
    data() {
        return {
            marcas:[],
        };
    },
    mounted(){
        servicio.getMarcas().then(res => {
            this.marcas = res
        })
    }
};
</script>

<style scoped>

</style>