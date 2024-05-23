const Categoria = require("../models/Categoria")

class CategoriaController{
    //Criando crud
    create(req,res){

        let {nome_categoria} = req.body

        Categoria.inserirCategoria(nome_categoria).then(
            resposta=>{
                console.debug("criando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                console.debug("Erro: criando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req,res){
        Categoria.mostrarCategorias().then(
            resposta=>{
                console.debug("Mostrando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                console.debug("Erro: Mostrando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req,res){
        let {id_categoria} = req.params
        let {nome_categoria} = req.body

        Categoria.atualizarCategorias(id_categoria, nome_categoria).then(
            resposta=>{
                console.debug("atualizando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                console.debug("Erro: atualizando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req, res){
        let {id_categoria} = req.params
        

        Categoria.deletarCategorias(id_categoria).then(
            resposta=>{
                console.debug("deletando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                console.debug("Erro: deletando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

}

module.exports = new CategoriaController()