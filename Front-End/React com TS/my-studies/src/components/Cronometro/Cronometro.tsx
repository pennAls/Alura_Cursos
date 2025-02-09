import { useContext, useState } from "react";
import { TarefaContext } from "../../App";
import Botao from "../Botao"
import Relogio from "./Relogio"
import style from  "./cronometro.module.scss"
import { timeToSeconds } from "../../common/utils/time";


export const Cronometro = () =>{
    const { selectedTarefa } = useContext(TarefaContext);
    const tarefa = { ...selectedTarefa };
    const tempo = tarefa?.tempo ?? "00:00:00";
    const [tempoState,setTempo] = useState<Number>();
    setTempo(timeToSeconds(tempo))

    

    return(
        <div className= {style.cronometro}>
            <p className= {style.titulo}>Escolha um Card e inicie o cronômetro</p>
            <div className= {style.relogioWrapper}>
            <Relogio/>
            </div>
            <Botao>
                Começar
            </Botao>
        </div>
    )
}