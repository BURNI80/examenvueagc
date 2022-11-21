import Global from "../global/global";
import axios from "axios";
import Cookies from "js-cookie";

export default class CubosService {

    getCubos() {
        return new Promise(function (resolve) {
            const req = "/api/Cubos"
            axios.get(Global.url + req).then(res => {
                resolve(res.data)
            })
        })
    }

    getCubosMarca(marca) {
        return new Promise(function (resolve) {
            const req = "/api/Cubos/CubosMarca/"
            axios.get(Global.url + req + marca).then(res => {
                resolve(res.data)
            })
        })
    }

    getMarcas() {
        return new Promise(function (resolve) {
            const req = "/api/Cubos/Marcas"
            axios.get(Global.url + req).then(res => {
                resolve(res.data)
            })
        })
    }

    getComentario(id) {
        return new Promise(function (resolve) {
            const req = "/api/ComentariosCubo/GetComentariosCubo/"
            axios.get(Global.url + req + id).then(res => {
                resolve(res.data)
            })
        })
    }

    login(email, pass) {
        return new Promise(function (resolve) {
            const req = "/api/Manage/Login"
            var data = {
                email: email ,
                password: pass
            }
            axios.post(Global.url + req, data).then(res => {
                var token = res.data.response
                Cookies.set("token",token)
                resolve(res.data)
            })
        })
    }

    registro(nombre,email, pass) {
        return new Promise(function (resolve) {
            const req = "/api/Manage/RegistroUsuario"
            var data = {
                idUsuario:0,
                nombre:nombre,
                email: email ,
                pass: pass,
            }
            axios.post(Global.url + req, data).then(res => {
                resolve(res.data)
            })
        })
    }

    getPerfil() {
        return new Promise(function (resolve) {
            const req = "/api/Manage/PerfilUsuario"
            var token = Cookies.get("token")
            var headers = {
                headers:{
                    Authorization:"Bearer "+token
                }
            }
            axios.get(Global.url + req,headers).then(res => {
                resolve(res.data)
            })
        })
    }


    getCompras() {
        return new Promise(function (resolve) {
            const req = "/api/Compra/ComprasUsuario"
            var token = Cookies.get("token")
            var headers = {
                headers:{
                    Authorization:"Bearer "+token
                }
            }
            axios.get(Global.url + req,headers).then(res => {
                resolve(res.data)
            })
        })
    }

    comprar(id) {
        return new Promise(function (resolve) {
            const req = "/api/Compra/InsertarPedido/"
            var token = Cookies.get("token")
            var headers = {
                headers:{
                    Authorization:"Bearer "+token
                }
            }
            var data= {

            }
            axios.post(Global.url + req +id,data, headers).then(res => {
                resolve(res)
            })
        })
    }
}
