const mysql = require("mysql2")
const dbConfig = require("../config")
//diretorio do script sendo executado
const  caminhoServer = require("path")
class Imagem{
    constructor(){
        this.conexao  = mysql.createConnection(dbConfig.db)
    }

    inserir(arquivo,alternativo,nomeImagem){
        return new Promise((resolve, reject)=>{
            let sql = `INSERT INTO anuncios (alternativo, caminho) VALUE ('${alternativo}','${nomeImagem}')`
            this.conexao.query(sql,function(erro,retorno){
                if(erro){
                   reject([400, erro]) //erro 
                }else{
                    arquivo.mv(caminhoServer + "/../Public/img/" +nomeImagem)
                    resolve([201, "Inserido"])
                }
            })
        })
        
    }

    MostrarTodos(){
        return new Promise((resolve, reject)=>{
            let sql = `SELECT * FROM anuncios`
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400, erro])
                }else{
                    resolve([200, retorno])
                }
            })
        })
    }

    atualizar(alternativo, id) {
        return new Promise((resolve, reject) => {
            let sql = `UPDATE anuncios SET alternativo = '${alternativo}' WHERE imagem_id = ${id}`;
            this.conexao.query(sql, function(erro, retorno) {
                if (erro) {
                    reject([400, erro]); // erro
                } else {
                    resolve([204, "Atualizado com sucesso"]);
                }
            });
        });
    }

    deletar(id){
        return new Promise((resolve, reject) => {
            let sql = `DELETE FROM anuncios WHERE imagem_id=${id}`;
            this.conexao.query(sql, function(erro, retorno) {
                if (erro) {
                    reject([400, erro]); // erro
                } else {
                    resolve([204, "Deletado com sucesso"]);
                }
            });
        });
    }
}

module.exports = new Imagem()