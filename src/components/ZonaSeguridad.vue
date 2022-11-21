<template>
    <div>
        <h1>Zona De Seguridad</h1>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Opciones
            </button>
            <ul class="dropdown-menu">
                <li><router-link class="dropdown-item" to="/perfil">Ver Perfil</router-link></li>
                <li><router-link class="dropdown-item" to="/compras">Mostrar Compras</router-link></li>
                <li><router-link class="dropdown-item" to="/comprar">Comprar</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ZonaSeguridad',
    data() {
        return {
            
        };
    },
};
</script>

<style scoped>

</style>