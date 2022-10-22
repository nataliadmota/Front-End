import React, { useEffect } from "react";

export default function(({selecionados}){
    const[ingredientes, setIngredientes] = useState(selecionados);

    useEffect(()=>{
        setIngredientes(selecionados);
    }, [selecionados]);

    return(
        <div>
            <h3>Selecionados: </h3>
            <p>{ingredientes.join(" ")}</p>
        </div>
    )
    }
