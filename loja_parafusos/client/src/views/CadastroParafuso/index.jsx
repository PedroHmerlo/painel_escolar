import {useEffect, useState} from 'react'

function CadastroParafuso() {
    let [Categorias, setCategorias] = useState([])
    let [nome_parafuso, setNome] = useState("")
    let [id_categoria, setId_categoria] = useState("")

    useEffect(()=>{
        document.title = "Cadastro de Parafuso"
        pegarCategrorias()
    },[])

    async function pegarCategrorias(){
        const resposta = await fetch("/categoria/")

        const dados = await resposta.json()
        setCategorias(dados)

    }

    async function cadastrarParafuso(event){
        event.preventDefault()

        const parafusoData = {
            nome_parafuso,
            id_categoria
        }

        try {
            const resposta = await fetch("/parafuso",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(parafusoData)
            })

            if(!resposta.ok){
                alert("Erro ao criar usuário")
                console.debug(resposta)
            }else{
                console.debug("Parafuso cadastrado")
                alert("Parafuso Cadastrado")
                window.location.href = '/telaP'
            }
        } catch (error) {
            console.debug(error)
        }
    }
    return (
        <div>
            <form action="" onSubmit={cadastrarParafuso}>
                <input placeholder='nome' type="text" value={nome_parafuso} onChange={e => setNome(e.target.value)}/>
                <select name="" id="" value={id_categoria} onChange={e=>setId_categoria(e.target.value)}>
                    {Categorias.map(categoria=>(
                        <option key={categoria.id_categoria} value={categoria.id_categoria}>{categoria.nome_categoria}</option>
                    ))}
                    
                </select>
                <button type='submit' on>Cadastrar</button>
            </form>
        </div>
    )
}

export default CadastroParafuso