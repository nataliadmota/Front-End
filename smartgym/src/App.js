import React,{useState} from "react";

function App() {
  const [membro, setMembro] = useState();
  const [nome, setNome] = useState();
  const [cargo, setCargo] = useState();
  const [idade, setIdade] = useState();
  const [curso, setCurso] = useState();

  function handleInputChange(e){
      const key = e.target.name;

      const newMembro = {...membro};
      newMembro[key] = e.target.value;

      setMembro(newMembro);
      console.log(newMembro);
  }

  return (
    <div>
      <h1>Novo membro</h1>
      <input
       type="text" 
       placeholder="Nome" 
       onChange={handleInputChange}/>
      <br />

      <input id="GS"
        type="radio"
        name="cargo"
        value="Gerente Scrum"
        onChange={handleInputChange}/>
        <label htmlfor="GS"> Gerente Scrum</label>
      <br />
      <br />

      <input id="GS"
       type="radio"
        name="cargo"
        value="Gerente de Produtos"
        onChange={handleInputChange}/>
        <label htmlfor="GS"> Gerente de Produtos</label>
      <br />
      <input
       type="text" 
       placeholder="idade" 
       onChange={handleInputChange}/>
      <br />
      <input
       type="text" 
       placeholder="curso" 
       onChange={handleInputChange}/>
      <br />
      <input
       type="text" 
       placeholder="estado" 
       onChange={handleInputChange}/>
      <br />
      <input
       type="text" 
       placeholder="cidade" 
       onChange={handleInputChange}/>
      <br />
      <p>Nome: {nome}</p>
      <p>Cargo: {cargo}</p>
      <p>Cargo: {idade}</p>
      <p>Cargo: {curso}</p>
    </div>
  );
}

export default App;