let sites = [
    {id:1, name:"SENAI ES", site:"https://senaies.com.br/"},
    {id:2, name:"FLAMENGO", site:"https://www.flamengo.com.br/"},
    {id:3, name:"FLAMENGO NOTICIAS", site:"https://ge.globo.com/futebol/times/flamengo/"}
]

class SitesController{
    //Mostra a lista de sites
    index(req, res){
        console.debug("GET :: /sites")
        return res.json(sites)
    }

    //Mostar um elemento da lista
    show(req, res){
        const id = parseInt(req.params.id)
        const site = sites.find(function(site){
        return site.id === id;
    })

    const status = sites ? 200 : 400

    console.debug("GET :: /sites", sites)
    return res.json(site)
    }

    //Inserir um elemento na lista
    create(req, res){
        const {name, site} = req.body
        const id = sites[sites.length-1].id+1
        const newSite = {id:id, name:name, site:site}

        sites.push(newSite)

        console.debug("POST :: /sites")
        return res.status(201).json(newSite)
    }

    //Atualizar um registro
    update(req, res){
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
    }

    //Deletando um registro
    destroy(req, res){
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
        }
}

module.exports = new SitesController()