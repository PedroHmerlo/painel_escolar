const Aula = require("../models/aula")

class AulaController{
    index(req, res){
        console.debug("GET :: /aula")
        Inserir.MostrarTodos().then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta[1])
                res.status(resposta[0]).json("Erro: " + resposta[1].errno)
            }
        )
    }

    create(req, res){
        console.debug("POST :: /aula")
        let{data, hora_inicio, hora_fim, turma, instrutor, unidade_curricular, ambiente,
        tipo, turno, cod_instrutor, chave_entregue} = req.body
        //console.debug(req.body) 

        Aula.inserir(data, hora_inicio, hora_fim, turma, instrutor, unidade_curricular, ambiente, tipo, turno, cod_instrutor, chave_entregue).then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta[1])
                res.status(resposta[0]).json("Erro: " + resposta[1].errno)
            }
        )
    }

    update(req, res){
        let id = req.params.id
        let{data, hora_inicio, hora_fim, turma, instrutor, unidade_curricular, ambiente,
            tipo, turno, cod_instrutor, chave_entregue} = req.body
        
        console.debug("PUT :: /aula/:id")
        Aula.atualizar(id,data, hora_inicio, hora_fim, turma, instrutor, unidade_curricular, ambiente, tipo, turno, cod_instrutor, chave_entregue).then(
            resposta=>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta[1])
                res.status(resposta[0]).json("Erro: " + resposta[1].errno)
            }
        )
        
        
    }
}
module.exports = new AulaController()