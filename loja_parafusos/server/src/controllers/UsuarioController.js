const Usuario = require("../models/Usuarios")

class UsuarioController{
    //Criando crud
    create(req,res){
        // let nome = req.body.nome
        // let login = req.body.login
        // let sehna = req.body.senha

        let {nome,login,senha} = req.body

        Usuario.inserirUsuario(nome, login, senha).then(
            resposta=>{
                console.debug("criando usuarios")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                console.debug("Erro: criando usuarios")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req,res){
        Usuario.mostarUsuarios().then(
            resposta=>{
                console.debug("Mostrando usuarios")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                console.debug("Erro: Mostrando usuarios")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req,res){
        let {id_usuario} = req.params
        let {nome,login,senha} = req.body

        Usuario.atualizarUsuario(id_usuario, nome, login, senha).then(
            resposta=>{
                console.debug("atualizando usuarios")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                console.debug("Erro: atualizando usuarios")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req, res){
        let {id_usuario} = req.params
        

        Usuario.deletarUsuario(id_usuario).then(
            resposta=>{
                console.debug("deletando usuarios")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                console.debug("Erro: deletando usuarios")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    logar(req, res){
        let{login, senha} = req.body

        Usuario.verificarLoginSenha(login, senha).then(
            resposta=>{
                console.debug("Efetuando login")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                console.debug("Erro: Erro Efetuando Login")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

module.exports = new UsuarioController()