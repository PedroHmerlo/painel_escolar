import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import './estilo.css'

function AtualizarUsusarios() {
    const{id} = useParams()  //usuario_id é a mesma coisa que {id}

    //Definindo os estados para cada campo do formulário
    const [nome, setNome] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [usuario_tipo, setUsuarioTipo] = useState('')

    useEffect(()=>{
        async function buscarUsuario(){
            try {
                const resposta = await fetch("/usuarios/"+id)
                const dados = await resposta.json()
                if(resposta.ok){
                    setNome(dados.nome)
                    setUsuario(dados.usuario)
                    setUsuarioTipo(dados.usuario_tipo)
                }else{
                    throw new Error('Falha ao carregar usuários')
                }
            } catch (error) {
                alert(error)
                console.error("Erro ao buscar os dados do usuário", error)                
            }
        }
        buscarUsuario()
    },[id])

    //Função de atualizar usuário
    async function updateUsuario(event){
        event.preventDefault() //Impede o recarregamento da página
        const usuarioData ={
            nome,
            usuario,
            senha,
            usuario_tipo
        }
        try {
            
            const resposta = await fetch("/usuarios/"+id,{
                method:'PUT', //verbo HTTP
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(usuarioData)
            })
            if(!resposta.ok){
                throw new Error("Erro ao atualizar usuário")
            }else{
                alert("Usuário Atualizado")
                window.location.href = "/"
            }
        } catch (error) {
            //alert(error)
            console.error("Erro ao atualizar o usuário", error)
        }
    }
  return (
    <div className="container">
            <h1>Editar Usuário</h1>
            <form onSubmit={updateUsuario}>
                <label>Nome:</label>
                <input type="text" id="" value={nome} onChange={e => setNome(e.target.value)} />
                <label>Usuário:</label>
                <input type="text" id="" value={usuario} onChange={e => setUsuario(e.target.value)} />
                <label>Senha:</label>
                <input type="password" id="" value={senha} onChange={e => setSenha(e.target.value)} />
                <label>Tipo Usuário:</label>
                <select id="" value={usuario_tipo} onChange={e => setUsuarioTipo(e.target.value)}>
                    <option value="">Selecione</option>
                    <option value="A">Admin</option>
                    <option value="U">Usuário</option>
                </select>
                <button type='submit'>Atualizar</button>
            </form>
        </div>
  )
}

export default AtualizarUsusarios