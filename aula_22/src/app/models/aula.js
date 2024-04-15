const msyql = require("mysql2")
const dbConfig = require("../config")

const caminhoServer2 = require("path")
const { promises } = require("dns")

class Aula{
    constructor(){
        this.conexao = msyql.createConnection(dbConfig.db)
    }

    inserir(data, hora_inicio, hora_fim, turma, instrutor, unidade_curricular, ambiente, tipo, turno, cod_instrutor, chave_entregue){
        return new Promise((resolve, reject)=>{
            let sql = `INSERT INTO aulas(data, hora_inicio, hora_fim, turma, instrutor, unidade_curricular, ambiente, tipo, turno, cod_instrutor, chave_entregue) 
            VALUE ('${data}', '${hora_inicio}', '${hora_fim}', '${turma}', '${instrutor}', '${unidade_curricular}', '${ambiente}', '${tipo}', '${turno}', '${cod_instrutor}', '${chave_entregue}')`
            this.conexao.query(sql,function(erro, retorno){
                if(erro){
                    reject([400, erro]) //erro
                }else{
                    resolve([201, "Inserido"])
                }
            })
        })
    }

    MostrarTodos(){
        return new Promise((resolve, reject)=>{
            let sql = `SELECT * FROM aulas`
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400, erro])
                }else{
                    resolve([200, retorno])
                }
            })
        })
    }

    atualizar(id, data, hora_inicio, hora_fim, turma, instrutor, unidade_curricular, ambiente, tipo, turno, cod_instrutor, chave_entregue){
        return new Promise((resolve, reject)=>{
            let sql = `UPDATE aulas SET data = '${data}', hora_inicio = '${hora_inicio}', hora_fim = '${hora_fim}', turma = '${turma}', instrutor = '${instrutor}', unidade_curricular = '${unidade_curricular}', ambiente = '${ambiente}', tipo = '${tipo}', turno = '${turno}', cod_instrutor = '${cod_instrutor}', chave_entregue = '${chave_entregue}' WHERE aula_id = ${id}`;
            this.conexao.query(sql, function(erro, retorno){
                if (erro){
                    reject([400, erro])
                }else{
                    resolve([204, "Atualizado com sucesso"])
                }
            })
        })
    }

    deletar(id){
        return new Promise((resolve, reject) =>{
            let sql = `DELETE FROM aulas WHERE aula_id = ${id}`;
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400, erro])
                }else{
                    resolve([204, "Deletado com sucesso"])
                }
            })
        })
    }
}

module.exports = new Aula()