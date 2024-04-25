import {useEffect, useState} from 'react'

function Home() {
  //Estado para armazenar os usuários
  const [usuarios, setUsuarios] = useState([])

  useEffect(()=>{
    document.title = "Página Inicial"

    //Função carregar usuaários
    async function carregarUsuarios(){
      try {
        //Fazer uma chamada da API
        const resposta = await fetch('/usuarios')

        if(!resposta.ok){
          //Exibindo erro API
          console.debug("HTTP erro: "+resposta.status)
        }else{
          //Exibindo sucesso API
          let dados = await resposta.json()
          setUsuarios(dados)
        }
      } catch (error) {
        console.error("Erro ao buscar usuários"+error)
      }
    }

    //Chamando função carregar usuários
    carregarUsuarios()

  })
  return (
    <div className='container'>
      <h1>Todos os usuários</h1>
      <table>
        <tr>
          <th>id usuário</th>
          <th>nome</th>
          <th>usuario</th>
          <th>senha</th>
          <th>tipo usuário</th>
        </tr>
        <tbody>
        {usuarios.map(usuarios=>(
          <tr key={usuarios.usuario_id}>
            <td>{usuarios.usuario_id}</td>
            <td>{usuarios.nome}</td>
            <td>{usuarios.usuario}</td>
            <td>{usuarios.senha}</td>
            <td>{usuarios.usuario_tipo}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home