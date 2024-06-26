const mysql = require("mysql2")
const dbConfig = require("../config")
const bcrypt = require("bcryptjs")

class Usuario{
    constructor(){
        this.conexao  = mysql.createConnection(dbConfig.db)
    }

    mostrarUsuario(usuario_id){
        return new Promise((resolve, reject)=>{
            let sql = `SELECT * FROM user WHERE usuario_id='${usuario_id}'`
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    console.debug(erro)
                    reject([400, erro])
                }else{
                    if(retorno.length === 0){
                        resolve([404, "usuário não encontrado"])
                    }else{
                        resolve([200, retorno])
                    }
                }
            }) 
        })
    }

    mostrarTodos(){
        return new Promise((resolve, reject)=>{
            let sql = `SELECT * FROM user`
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    console.debug(erro)
                    reject([400, erro])
                }else{
                    resolve([200, retorno])
                }
            }) 
        })
        
    }

    inserir(nome, usuario, senha, usuario_tipo){
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(senha, salt)

        console.log(hash)
        
        return new Promise((resolve, reject)=>{
            let sql = `INSERT INTO user (nome, usuario, senha, usuario_tipo)
            VALUE ('${nome}', '${usuario}', '${hash}', '${usuario_tipo}')`
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    console.debug(erro)
                    reject([400, erro])
                }else{
                    resolve([201, "Usuário Inserido"])
                }
            })
        })
    }

    verifiicaUsarioSenha(usuario, senha){
        return new Promise((resolve, reject)=>{
            let sql = `SELECT * FROM user WHERE user ='${usuario}'`
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    console.debug(erro)
                    reject([400, erro])
                }else{
                    console.debug(retorno)
                    if(retorno.length === 0){
                        resolve([401,"Usuario ou senha inválido"])
                    }else{
                        let hash = retorno[0].senha
                        let logado = bcrypt.compareSync(senha, hash);
                        if(logado){
                            resolve([200, "logado"])
                        }else{
                            resolve([401, "Usuário ou senha inválidos"])
                        }
                        
                    }
                }
            })
        })
    }

}

module.exports = new Usuario()