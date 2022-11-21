import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import CuboCmponent from './components/CuboCmponent.vue'
import LoginComponent from './components/LoginComponent.vue'
import RegistroComponent from './components/RegistroComponent.vue'
import ZonaSeguridad from './components/ZonaSeguridad.vue'
import PerfilComponent from './components/PerfilComponent.vue'
import ComprasComponent from './components/ComprasComponent.vue'
import ComprarComponent from './components/ComprarComponent.vue'

const misRutas = [
    {
        path:"/:marca?", component:HomeComponent,
    },
    {
        path:"/cubo/:id", component:CuboCmponent,
    },
    {
        path:"/login", component:LoginComponent,
    },
    {
        path:"/registro", component:RegistroComponent
    },
    {
        path:"/zonaseguridad", component:ZonaSeguridad
    },
    {
        path:"/perfil", component:PerfilComponent
    },
    {
        path:"/compras", component:ComprasComponent
    },
    {
        path:"/comprar", component:ComprarComponent
    },
    
]
const router = createRouter({
    history: createWebHistory(),
    routes: misRutas
})
export default router;