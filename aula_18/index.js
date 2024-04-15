const express = require("express")
const server = express()
const fileupload = require("express-fileupload")
const mysql = require("mysql2")

server.use(fileupload())
server.use(express.json())
server.use(express.urlencoded({extended:false}))

const conexao  = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"painel"
})

server.use(express.static("Public"))

conexao.connect(function(erro){
    if(erro) throw erro
        console.log("Conexao realizada com sucesso")
})

let sites = [
    {id:1, name:"SENAI ES", site:"https://senaies.com.br/"},
    {id:2, name:"SENAI ES", site:"https://senaies.com.br/"},
    {id:3, name:"SENAI ES", site:"https://senaies.com.br/"}

]

//painel princial
server.get("/",(req,res)=>{
    res.sendFile(__dirname + "/Public/index.html")
})

//painel lateral
server.get("/lateral",(req,res)=>{
    res.sendFile(__dirname + "/Public/lateral.html")
})

//rota envio de imagens
server.post("/imagens",(req,res)=>{
    let alternativo = req.body.alternativo
    let nomeImagem = req.files.imagem.name
    nomeImagem = nomeImagem.split(".")
    nomeImagem = new Date().getTime() + "." + nomeImagem[nomeImagem.length-1]

    let sql = `INSERT INTO anuncios (alternativo, caminho) VALUE ( ${alternativo}','${nomeImagem}')`
    conexao.query(sql,function(erro,retorno){
        req.files.imagem.mv(__dirname + "/Public/img/" +nomeImagem)
    })
    
    res.json()
})

//mostra a lista de sites
server.get("/sites",(req,res)=>{
    console.debug("GET :: /SITES",sites)
    return res.json(sites)
})

//mostra o site de acordo com o id
server.get("/sites/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const site = sites.find(function(site){
        return site.id === id;
    });

    //operador ternario no lugar do if
    const status = site ? 200:400
    console.log(site)
    return res.json(site)
})

 //inserir algum elemento na lista
server.post("/sites",(req,res)=>{
    const{name,site} = req.body
    const id = sites [sites.length-1].id+1
    const nvsite = {id:id,name:name,site:site}

    sites.push(nvsite)
    console.debug("PUT :: /SITES/",sites)
    return res.status(201).json(nvsite)
})

//atualizar algum elemento 
server.put("/sites/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const {name,site} = req.body
    const index = sites.findIndex(function(site){
        return site.id === id; 
    })

   const status = index >= 0 ? 200:400

    if(index>=0){
        sites[index] = {id, name, site} //abreviando criação de objeto
    }
    return res.status(status).json(sites[index])
})

server.delete("/sites/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const index = sites.findIndex(function(site){
        console.debug("DELETE :: /SITES/",sites)

        return site.id === id
    })
    const status = index >= 0 ? 200 : 404


    if(index>=0){
        sites.splice(index,1)
    }
    return res.status(status).json()
})
server.listen(3000)
