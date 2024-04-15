const  express = require("express")
const routes = require("./routes")
const fileupload = require("express-fileupload")

class App{
    constructor(){
        this.server = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){  //softwares que intermediam
        //middleware para analisar json no corpo das requisições
        this.server.use(express.json())
        
        //comando que permite acessar diretorio com arquivos static
        this.server.use(express.static("public"))

        //fazer o uso do file upload
        this.server.use(fileupload())
    }

    routes(){
        this.server.use(routes)
    }

}


module.exports = new App().server