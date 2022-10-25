import React, {useState} from "react";
//estudar biblioteca antd

function App() { 
    
  const [pessoa, setPessoa] = useState({});

  function handleInputChange(e) {
    const key = e.target.name;

    const newPessoa = {...pessoa};
    newPessoa[key] = e.target.value;

    setPessoa(newPessoa);
  }

    return (
      <div>
        <h1>Bem vindo - Cadastre-se</h1>
        <h1>Dados Pessoais</h1>
        <p>Nome</p>
        <input 
          type="text" 
          name='nome'
          onChange={handleInputChange} 
        />
        <br />
        <p>Idade</p>
        <input 
          type="number" 
          name='idade'
          onChange={handleInputChange} 
        />
        <br />
        <p>CPF</p>
        <input 
          type="text"
          name='cpf' 
          onChange={handleInputChange} 
        />
        <br />
        <p>Sexo</p>
        <input 
          type="text" 
          name='sexo'
          onChange={handleInputChange} 
        />
        <br />
        <p>Endereço</p>
        <input 
          type="text" 
          name='endereco'
          onChange={handleInputChange} 
        />
        <br />
        <p>Cidade / Estado</p>
        <input 
          type="text" 
          name='cidadeEstado'
          onChange={handleInputChange} 
        />
        <br />
        <p>Telefone</p>
        <input 
          type="text" 
          name='telefone'
          onChange={handleInputChange} 
        />
        <br />
        <h1>Dados de Login</h1>
        <p>E-mail</p>
        <input 
          type="text" 
          name='login'
          onChange={handleInputChange} 
        />
        <br />
        <p>Senha</p>
        <input 
          type="text" 
          name='senha'
          onChange={handleInputChange} 
        />
        <br />
        <p>Confirme sua senha</p>
        <input 
          type="text" 
          name='confirmarSenha'
          onChange={handleInputChange} 
        />
        <br />
      </div>
    );
}


export default App;