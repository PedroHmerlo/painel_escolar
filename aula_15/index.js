const express = require("express")
const server = express()

server.use(express.json())

let sites = [
    {id:1, name:"SENAI ES", site:"https://senaies.com.br/"},
    {id:2, name:"FLAMENGO", site:"https://www.flamengo.com.br/"},
    {id:3, name:"FLAMENGO NOTICIAS", site:"https://ge.globo.com/futebol/times/flamengo/"}
]

//Mostar lista
server.get("/sites", (req,res)=>{
    return res.json(sites)
})

//Mostar 1 elemento da lista
server.get("/sites/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const site = sites.find(function(site){
        return site.id === id;
    })

    const status = sites ? 200 : 400

    return res.json(site)
})

//Inserir 1 elemento da lista
server.post("/sites", (req, res) =>{
    const {name, site} = req.body
    const id = sites[sites.length-1].id+1
    const newSite = {id:id, name:name, site:site}

    sites.push(newSite)

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
    return res.status(status).json()
})



server.listen(3000)