<template>
    <div>
        <table class="table table-striped">
            <thead>
                <th>Comentario</th>
                <th>Fecha</th>
            </thead>
            <tbody>
                <tr v-for="com in comentarios" :key="com" >
                    <td>{{com.comentario}}</td>
                    <td>{{com.fechaComentario}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import CubosService from "../services/Cubos";
var servicio = new CubosService();
export default {
    name: 'CuboCmponent',
    data() {
        return {
            comentarios:[],
            id:""
        };
    },
    mounted(){
        this.getCommentarios();
    },
    methods:{
        getCommentarios(){
            this.id = this.$route.params.id
            servicio.getComentario(this.id).then(res => {
                this.comentarios = res
            })
        }
    }
};
</script>

<style scoped>

</style>