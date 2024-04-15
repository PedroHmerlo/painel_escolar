const express = require("express")
const mysql = require("mysql2")
const server = express()
const fileupload = require("express-fileupload")

server.use(fileupload())
server.use(express.json())
server.use(express.urlencoded({extend:false}))

const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"painel"
})


server.use(express.static("public"))

conexao.connect(function(erro){
    if(erro) throw erro
    console.log("Conexão realizada com sucesso")
})

let sites = [
    {id:1, name:"SENAI ES", site:"https://senaies.com.br/"},
    {id:2, name:"FLAMENGO", site:"https://www.flamengo.com.br/"},
    {id:3, name:"FLAMENGO NOTICIAS", site:"https://ge.globo.com/futebol/times/flamengo/"}
]

//Raiz do painel
server.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/painel.html")
})

//Raiz do lateral
server.get("/lateral", (req, res)=>{
    res.sendFile(__dirname + "/public/lateral.html")
})

//Rota envio de imagens
server.post("/imagens", (req,res)=>{
    let alternativo = req.body.alternativo
    let nomeImagem = req.files.imagem.name
    nomeImagem = nomeImagem.split(".")
    nomeImagem = new Date().getTime() + "." + nomeImagem[nomeImagem.length-1]

    let sql = `INSERT INTO anuncios (alternativo, caminho) VALUE('${alternativo}','${nomeImagem}')`

    conexao.query(sql, function(erro, retorno){
        if(erro) throw erro
        req.files.imagem.mv(__dirname + "/public/img/" +nomeImagem)
    })
    
    res.json()
})


//Mostar lista
server.get("/sites", (req,res)=>{
    console.debug("GET :: /sites")
    return res.json(sites)
})

//Mostar 1 elemento da lista
server.get("/sites/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const site = sites.find(function(site){
        return site.id === id;
    })

    const status = sites ? 200 : 400

    console.debug("GET :: /sites", sites)
    return res.json(site)
})

//Inserir 1 elemento da lista
server.post("/sites", (req, res) =>{
    const {name, site} = req.body
    const id = sites[sites.length-1].id+1
    const newSite = {id:id, name:name, site:site}

    sites.push(newSite)

    console.debug("POST :: /sites")
    return res.status(201).json(newSite)
})

//atualizar um registro
server.put("/sites/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    const {name, site} = req.body
    const index = sites.findIndex(function(site){
        return site.id === id;
    })

    const status = index >= 0 ? 200 : 400

    if(index >= 0){
        sites[index] = {id, name, site} //abreviando criação de objeto
    }

    console.debug("PUT :: /sites/:id")
    return res.status(status).json(sites[index])
})

//Deletando um Registro
server.delete("/sites/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    const index = sites.findIndex(function(site){
        return site.id === id;
    })
    const status = index >= 0 ? 200 : 400

    if(index >=0){
        sites.splice(index, 1)
    }
    console.debug("DELETE :: /sites/:id")
    return res.status(status).json()
})



server.listen(3000)