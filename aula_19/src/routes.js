const express = require("express")
const router = express.Router

const routes = new router()
const sites = require("./app/controllers/SiteControlles")
const imagens = require("./app/controllers/ImagemController")
routes.get("/", (req, res)=>{

    res.sendFile("index.html",{root:'./public'})
})

routes.get("/lateral", (req, res)=>{
    res.sendFile("lateral.html",{root:'./public'})
})

routes.post("/imagens",imagens.create)
routes.get("/imagens",imagens.index)

routes.get("/sites", sites.index)

routes.get("/sites/:id",sites.show)

routes.post("/sites",sites.create)

routes.put("/sites/:id", sites.update)
routes.put("/imagens/:id", imagens.update)

routes.delete("/sites/:id", sites.destroy)
routes.delete("/imagens/:id", imagens.destroy)

module.exports = routes