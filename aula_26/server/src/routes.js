const express = require("express")
const router = express.Router

const routes = new router()
const sites = require("./app/controllers/SiteControlles")
const imagens = require("./app/controllers/ImagemController")
const aulas = require("./app/controllers/aulaController")
const usuarios = require("./app/controllers/usuarioController")
routes.get("/", (req, res)=>{

    res.sendFile("index.html",{root:'./public'})
})

routes.get("/lateral", (req, res)=>{
    res.sendFile("lateral.html",{root:'./public'})
})

routes.get("/Inserir_aulas", (req, res)=>{
    res.sendFile("inserir_aulas.html",{root:'./public'})
})


routes.get("/imagens",imagens.index)
routes.get("/sites", sites.index)
// routes.get("/usuarios",usuarios.verificaToken,usuarios.index)
routes.get("/usuarios",usuarios.index)



routes.get("/sites/:id",sites.show)
routes.get("/usuarios/:usuario_id", usuarios.show)

routes.post("/imagens",imagens.create)
routes.post("/sites",sites.create)
routes.post("/aulas",aulas.create)
routes.post("/usuarios",usuarios.create)
routes.post("/logar",usuarios.logar)

routes.put("/sites/:id", sites.update)
routes.put("/imagens/:id", imagens.update)
routes.put("/aulas/:id",aulas.update)
routes.put("/usuarios/:usuario_id",usuarios.update)

routes.delete("/sites/:id", sites.destroy)
routes.delete("/imagens/:id", imagens.destroy)
routes.delete("/usuarios/:usuario_id", usuarios.destroy)



module.exports = routes