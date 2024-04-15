const Imagem = require("../models/Imagem")

class ImagemController{
    
    //mostra a lista de imagens
    index(req,res){
        console.debug("GET :: /imagens")
        Imagem.MostrarTodos().then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta[1])
                res.status(resposta[0]).json("Erro: " + resposta[1].errno)
            }
        )
        
    }
    //inserindo uma imagem
    create(req,res){
        let alternativo = req.body.alternativo
        let nomeImagem = req.files.imagem.name

        //separando extensao do arquivo
        nomeImagem = nomeImagem.split(".")

        //pegando extensao
        let extensao = nomeImagem[nomeImagem.length-1]

        //So suporta arquivo em jpg
        if(extensao === "jpg" || extensao === "png"){
            nomeImagem = new Date().getTime() + "." + nomeImagem[nomeImagem.length-1]
            let arquivo = req.files.imagem
            
            //O model retorna uma promessa o then é o caso positivo e o catch negativo
            Imagem.inserir(arquivo,alternativo,nomeImagem)
            .then(
                resposta =>{
                    res.status(resposta[0]).json(resposta[1])
                }
            ).catch(
                resposta =>{
                    console.debug(resposta[1])
                    res.status(resposta[0]).json("Erro: " + resposta[1].errno)
                }
            )
        }
        else{
            //erro 415 e tipo de arquivo nao suportado
            res.status(415).json({alert:"Arquivo n suportado"})
        }
        
    }

    update(req,res){
        let id = req.body.id
        let alternativo = req.body.alternativo

        console.debug("PUT :: /imagens/:id")
        Imagem.atualizar(alternativo, id).then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta[1])
                res.status(resposta[0]).json("Erro: " + resposta[1].errno)
            }
        )
    }

    destroy(req, res){
        let id = req.params.id

        console.debug("DELETE :: /imagens/:id")
        Imagem.deletar(id).then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta[1])
                res.status(resposta[0]).json("Erro: " + resposta[1].errno)
            }
        )
    }
}

module.exports = new ImagemController()