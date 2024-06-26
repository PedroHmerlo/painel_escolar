const mysql = require("mysql2")
const config = require("../Config")

class Categoria{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
    }

    inserirCategoria(nome_categoria){
        let sql = `INSERT INTO categorias (nome_categoria) VALUE ("${nome_categoria}");`

        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400, erro])
                }
                resolve([201, "Categoria inserida"])
            })
        })

    }

    mostrarCategorias(){
        let sql = "SELECT * FROM categorias"

        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400, erro])
                }
                resolve([200, retorno])
            })
        })
    }

    atualizarCategorias(id_categoria, nome_categoria){
        let sql = `UPDATE categorias SET nome_categoria ="${nome_categoria}" WHERE id_categoria="${id_categoria}";`
        console.debug(sql)
        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400, erro])
                }else{
                    if(retorno["affectedRows"]>0){
                        resolve([201, "Categoria atualizada"])
                    }else{
                        resolve([404, "Categoria não encontrada"])
                    }
                }
            })
        })
    }

    deletarCategorias(id_categoria){
        let sql = `DELETE FROM categorias WHERE id_categoria="${id_categoria}";`

        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400, erro])
                }else{
                    if(retorno["affectedRows"]>0){
                        resolve([201, "Categoria deletada"])
                    }else{
                        resolve([404, "Categoria não encontrada"])
                    }
                }
            })
        })
    }

}

module.exports = new Categoria()