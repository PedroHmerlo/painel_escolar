import React from 'react'

function Cadastro() {
  return (
    <div class="conteudo">
        <div class="container-fluid p-0 text-center">
            <nav class="navbar navbar-expand-lg d-flex justify-content-center align-items-center">
                <a class="navbar-brand fs-4" href="#">NoPrecinho</a>
            </nav>
            
            <h3 class="mt-5">Cadastro de Usuário: </h3>
            <hr/>
        </div>
    
        <div class="container mt-5">
        <form action="">
        <div class="row">
                    <div class="col-md">
                        <label for="" class="form-label fs-4 mt-4">Nome Completo:</label>
                        <input type="text" class="form-control rounded-4 border border-black p-2 mt-2"/>
                        <label for="" class="form-label fs-4 mt-4">Data de Nascimento:</label>
                        <input type="date" class="form-control rounded-4 border border-black p-2 mt-2"/>
                        <label for="" class="form-label fs-4 mt-4">Telefone:</label>
                        <input type="" class="form-control rounded-4 border border-black p-2 mt-2"/>
                        <label for="" class="form-label fs-4 mt-4">Nome de Usuário:</label>
                        <input type="text" class="form-control rounded-4 border border-black p-2 mt-2"/>
                    </div>
    
                    <div class="col-2">
    
                    </div>
    
                    <div class="col-md">
                        <label for="" class="form-label fs-4 mt-4">CPF:</label>
                        <input type="text" class="form-control rounded-4 border border-black p-2 mt-2"/>
                        <label for="" class="form-label fs-4 mt-4">CEP:</label>
                        <input type="text" class="form-control rounded-4 border border-black p-2 mt-2"/>
                        <label for="" class="form-label fs-4 mt-4">E-mail:</label>
                        <input type="email" class="form-control rounded-4 border border-black p-2 mt-2" placeholder="exemplo@gmail.com"/>
                        <label for="" class="form-label fs-4 mt-4">Senha:</label>
                        <input type="password" class="form-control rounded-4 border border-black p-2 mt-2"/>
                    </div>
                </div>
            </form>
            <button type="submit" class="btn border border-black mt-4 rounded-4">Cadastrar-se</button><br/><br/>
        </div>
        <br/>
        <hr/>
    </div>
  )
}

export default Cadastro