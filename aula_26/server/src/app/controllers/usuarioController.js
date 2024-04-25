const Usuario = require("../models/usuario")
const jwt = require("jsonwebtoken")
const secret ="MinhaSenha@"


class UsuarioController{
    index(req, res){
        Usuario.mostrarTodos().
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
                console.log(resposta)
                let usuario_id = resposta[2]
                let usuario_tipo = resposta[3]
                let token = ''
                if(resposta[0] === 200){
                    token = jwt.sign({usuario_id, usuario_tipo}, secret,{expiresIn:120})
                }
                res.status(resposta[0]).json({token})
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                res.status(resposta[0]).json("erro: "+resposta[1].errno)
            }
        )
    }

    verificaToken(req, res, next){
        const token = req.headers['x-access-token']
        jwt.verify(token, secret, (erro, decoded)=>{
            if(erro){
                return res.status(401).json("Usuário não autenticado")
            }else{
                req.usuario_id = decoded.usuario_id
                req.usuario_tipo = decoded.usuario_tipo
                console.debug("Id:"+ decoded.usuario_tipo + "Tipo:"+ decoded.usuario_id)
                next()
            }
        })                
    }

}

module.exports = new UsuarioController()