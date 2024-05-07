import {useEffect, useState} from 'react'

function GestaoUsuarios() {
    //Estado para armazenar usuários
    const[usuarios, setUsuarios] = useState([])
    useEffect(()=>{
        document.title = "Gestão de usuários"
        carregarUsuarios()
    },[])

    //Função para carregar usuários
    async function carregarUsuarios(){
        try {
            //Faz a chamada para a API através do proxy
            const resposta = await fetch('/usuarios')
            if(!resposta){
                throw new Error("Erro requisição:"+resposta.status)
            }else{  //Não é necessário o else
                const dados = await resposta.json()
                setUsuarios(dados)
            }
        } catch (error) {
            console.error("Erro ao buscar os usuários", error)
        }
    }

    //Função de deletar um usuário
    async function deletarUsuario(usuario_id){
        if(window.confirm("Tem certeza que deseja deletar esse usuário?")){
            try {
                const resposta = await fetch('/usuarios/'+usuario_id, {
                    method: 'DELETE',
                })
                if(!resposta.ok){
                    throw new Error("Falha ao deletar usuário")

                }
                carregarUsuarios()
            } catch (error) {
                console.error("Erro ao deletar usuários:", error)
            }
        }
    }


  return (
    <div className='container'>
        <h1>Gestão de Usuários</h1>
        <table className='table table-hover table-stiped'> 
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Usuário</th>
                <th>Tipo</th>
                <th>açoes</th>
            </tr>
            <tbody>
                {usuarios.map(usuario=>(
                    <tr key={usuario.usuario_id}>
                        <td>{usuario.usuario_id}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.usuario}</td>
                        <td>{usuario.usuario_tipo}</td>
                        <td>
                            <button onClick={()=>deletarUsuario(usuario.usuario_id)} type='button' class="btn btn danger" >Deletar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default GestaoUsuarios