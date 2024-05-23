const mysql = require("mysql2")
const config = require("../Config")

class Parafuso{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
    }

    inserirParafusos(nome_parafuso, id_categoria){
        let sql = `INSERT INTO parafuso (nome_parafuso, id_categoria) VALUE ("${nome_parafuso}","${id_categoria}");`

        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400, erro])
                }
                resolve([201, "Parafuso inserido"])
            })
        })

    }

    mostarParafusos(){
        let sql = "SELECT * FROM parafuso"

        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400, erro])
                }
                resolve([200, retorno])
            })
        })
    }

    atualizarParafusos(id_parafuso, nome, id_categoria){
        let sql = `UPDATE parafuso SET nome="${nome}", id_categoria="${id_categoria}" WHERE id_parafuso="${id_parafuso}";`

        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400, erro])
                }
                resolve([201, "Parafuso Atualizado"])
            })
        })
    }

    deletarParafusos(id_parafuso){
        let sql = `DELETE FROM parafuso WHERE id_parafuso="${id_parafuso}";`

        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400, erro])
                }

                if(retorno["affectedRows"]>0){
                    resolve([201, "Parafuso deletado"])
                }else{
                    resolve([404, "Parafuso não encontrado"])
                }

            })
        })
    }

}

module.exports = new Parafuso()