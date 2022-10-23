import React,{useState} from "react";

function App() {
  const [exercicios, setExercicios] = useState([]);


  function handleInputChange(e){  
    const value = e.target.value;
    if(exercicios.indexOf(value) === -1){
      const newExercicios = [...exercicios, value];
      setExercicios(newExercicios); 
    }
    else{
    const index = exercicios.indexOf(value);
    const newExercicios = [...exercicios];
    newExercicios.slice(index, 1);
    setExercicios(newExercicios);
    }
  }

  return (
    <div>
      <h1>Exercícios em andamento</h1>
      <input
       id="Leg Press"
       type="checkbox" 
       value="Leg Press" 
       onChange={handleInputChange}
       />
       <label htmlfor= "Leg Press"> Leg Press</label>
      <br />
      <input
       id="Quadriceps e coluna"
       type="checkbox" 
       value="Quadriceps e coluna" 
       onChange={handleInputChange}
       />
       <label htmlfor= "Quadriceps e coluna"> Quadriceps e coluna</label>
      <br />
      <input
       id="Extensora"
       type="checkbox" 
       value="Extensora" 
       onChange={handleInputChange}
       />
       <label htmlfor= "Extensora"> Extensora</label>
      <br />
      <input
       id="Flexão"
       type="checkbox" 
       value="Flexão" 
       onChange={handleInputChange}
       />
       <label htmlfor= "Flexão"> Flexão</label>
      <br />
      <h3>Selecionados:</h3>      
     <p>{exercicios.join(" ")}</p>
    </div>
  );
}

export default App;