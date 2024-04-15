const express = require("express")
const server = express()

server.use(express.json())

let sites = [
    {id:1, name:"SENAI ES", site:"https://senaies.com.br/"},
    {id:2, name:"FLAMENGO", site:"https://www.flamengo.com.br/"},
    {id:3, name:"FLAMENGO NOTICIAS", site:"https://ge.globo.com/futebol/times/flamengo/"}
]

server.get("/sites", (req,res)=>{
    return res.json(sites)
})

server.get("/sites/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const site = sites.find(function(site){
        return site.id === id;
    })

    let status = ""
    if(site){
        status = 200
    }else{
        status = 404
    }

    return res.json(site)
})

server.listen(3000)