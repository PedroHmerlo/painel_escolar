const express = require("express")
const router = express.Router

const routes = new router()
const sites = require("./app/controllers/sitesControlle")

routes.get("/", (req, res)=>{
    res.sendFile("painel.html", {root:'./public'})
    
})

routes.get("/sites", sites.index)
routes.get("/sites/:id", sites.show)
routes.post("/sites", sites.create)
routes.put("/sites/:id", sites.update)
routes.delete("/sites/:id", sites.destroy)

module.exports = routes
