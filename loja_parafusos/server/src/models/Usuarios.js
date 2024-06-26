const mysql = require("mysql2")
const config = require("../Config")

class Usuario{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
    }

    inserirUsuario(nome, login, senha){
        let sql = `INSERT INTO usuarios (nome, login, senha) VALUE ("${nome}","${login}", "${senha}");`

        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400, erro])
                }
                resolve([201, "usuario inserido"])
            })
        })

    }

    mostarUsuarios(){
        let sql = "SELECT * FROM usuarios"

        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400, erro])
                }
                resolve([201, retorno])
            })
        })
    }

    atualizarUsuario(id_usuario, nome, login, senha){
        let sql = `UPDATE usuarios SET nome="${nome}", login="${login}", senha="${senha}" WHERE id_usuario="${id_usuario}";`

        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400, erro])
                }else{
                    if(retorno["affectedRows"]>0){
                        resolve([201, "Usuário atualizada"])
                    }else{
                        resolve([404, "Usuário não encontrada"])
                    }
                }
            })
        })
    }

    deletarUsuario(id_usuario){
        let sql = `DELETE FROM usuarios WHERE id_usuario="${id_usuario}";`

        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400, erro])
                }else{
                    if(retorno["affectedRows"]>0){
                        resolve([201, "Usuário atualizada"])
                    }else{
                        resolve([404, "Usuário não encontrada"])
                    }
                }
            })
        })
    }

    verificarLoginSenha(login,senha){
        let sql = `SELECT * FROM usuarios WHERE login = "${login}" AND senha="${senha}"`

        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400, erro])
                }else{
                    if(retorno.length === 0){
                        resolve([404, "Usuário não encontrado"])
                    }else{
                        let {id_usuario} = retorno[0]
                        resolve([200, {id_usuario}])
                    }
                }
            })
        })
    }
}

module.exports = new Usuario()