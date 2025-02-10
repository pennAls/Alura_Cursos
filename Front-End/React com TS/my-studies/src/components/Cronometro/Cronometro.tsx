import { useContext, useEffect, useState } from "react";
import { TarefaContext } from "../../App";
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./cronometro.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { Itarefa } from "../../types/Itarefa";

export const Cronometro = () => {
  const { selectedTarefa } = useContext(TarefaContext);
  const tempo = (selectedTarefa as Itarefa)?.tempo ?? "00:00:00";
  const [tempoState, setTempo] = useState<number>();

  useEffect(() => {
    setTempo(timeToSeconds(tempo));
  }, [selectedTarefa, tempo]);

  return (
    <div className={style.cronometro}>
      Tempo:{tempoState}
      <p className={style.titulo}>Escolha um Card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao>Começar</Botao>
    </div>
  );
};
