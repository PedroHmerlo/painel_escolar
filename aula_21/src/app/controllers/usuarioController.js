const Usuario = require("../models/usuario")

class UsuarioController{
    index(req, res){
        Usuario.mostrarUsuario(usuario_tipo).
        then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                res.status(resposta[0]).json("erro: "+resposta[1].errno)
            }
        )
    }


    show(req, res){
        let{ususario_id} = req.params
        Usuario.mostrarTodos(ususario_id).
        then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }


    create(req, res){
        let{nome, usuario, senha, usuario_tipo} = req.body
        Usuario.inserir(nome, usuario, senha, usuario_tipo).
        then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

   
    logar(req, res){
        let{usuario, senha} = req.body
        Usuario.verifiicaUsarioSenha(usuario, senha).
        then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                res.status(resposta[0]).json("erro: "+resposta[1].errno)
            }
        )
    }
}

module.exports = new UsuarioController()