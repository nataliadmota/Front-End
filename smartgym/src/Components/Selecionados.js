import React, { useEffect, useState } from "react";

function Selecionados({selecionados}){
    const[exercicios, setExercicios] = useState(selecionados);
    const[showWarning, setShowWarning] = useState(false);

    useEffect(()=>{
        const newExercicios = [];

        for(let i = 0; i < selecionados.length() && i < 3; i++){
            const element = selecionados[i];
            newExercicios.push(element);
        }

        setExercicios(newExercicios);
        setShowWarning(selecionados.length >= 3);
    }, [selecionados]);


    return(
        <div>
            <h3>Selecionados: </h3>
            <u1>
                {exercicios.map((exercicio, index) => {
                    return(
                     <li key={index}>{exercicio}</li>
                    )
                })}
            </u1>
            {showWarning && <h4> Número máximo de exercicios atingido</h4>}
        </div>
    )
    }

    export default Selecionados;
