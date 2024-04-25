let sites = [
    {id:1, name:"SENAI ES", site:"https://senaies.com.br/"},
    {id:2, name:"SENAI ES", site:"https://senaies.com.br/"},
    {id:3, name:"SENAI ES", site:"https://senaies.com.br/"}

]

class SitesController{
  index(req,res){
    console.debug("GET:: /sites")
    return res.json(sites)
  }
  //mostra um elemento da lista  
  show(req,res){
    const id = parseInt(req.params.id)
    const site = sites.find(function(site){
        return site.id === id;
    });

    //operador ternario no lugar do if
    const status = site ? 200:400
    console.log(site)
    return res.json(site)
  }
  //Inserir um elemento na lista
  create(req,res){
    const{name,site} = req.body
    const id = sites [sites.length-1].id+1
    const nvsite = {id:id,name:name,site:site}

    sites.push(nvsite)
    console.debug("PUT :: /SITES/",sites)
    return res.status(201).json(nvsite)
  }
  //atualizar um registro
  update(req,res){
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
  }
  //deletar um registro
  destroy(req,res){
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
  }
}

module.exports = new SitesController