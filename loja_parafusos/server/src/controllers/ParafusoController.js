const Parafuso = require("../models/Parafuso")

class ParafusoController{
    //Criando crud
    create(req,res){

        let {nome_parafuso} = req.body
        let {id_categoria} = req.body

        Parafuso.inserirParafusos(nome_parafuso, id_categoria).then(
            resposta=>{
                console.debug("criando parafuso")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                console.debug("Erro: criando parafuso")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req,res){
        Parafuso.mostarParafusos().then(
            resposta=>{
                console.debug("Mostrando parafuso")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                console.debug("Erro: Mostrando parafuso")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req,res){
        let {id_parafuso} = req.body
        let {nome_parafuso} = req.body

        Parafuso.atualizarParafusos(id_parafuso, nome_parafuso).then(
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
        let {id_parafuso} = req.params
        

        Parafuso.deletarParafusos(id_parafuso ).then(
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

module.exports = new ParafusoController()