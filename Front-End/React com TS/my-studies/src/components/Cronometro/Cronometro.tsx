import { useContext, useEffect, useState } from "react";
import { TarefaContext } from "../../App";
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./cronometro.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { Itarefa } from "../../types/Itarefa";

export const Cronometro = ({ finishTarefa }: { finishTarefa: () => void }) => {
  const { selectedTarefa } = useContext(TarefaContext);
  const tempo = (selectedTarefa as Itarefa)?.tempo ?? "00:00:00";
  const [tempoSeconds, setTempo] = useState<number>(0);

  useEffect(() => {
    setTempo(timeToSeconds(tempo));
  }, [selectedTarefa, tempo]);

  const regressiva = (tempo: number) => {
    setTimeout(() => {
      if (tempo > 0) {
        setTempo((tempo -= 1));
        return regressiva(tempo);
      }
      finishTarefa()
    }, 1000);
  };

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um Card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempoSeconds} />
      </div>
      <Botao
        onClick={() => {
          regressiva(tempoSeconds);
        }}
      >
        Começar
      </Botao>
    </div>
  );
};
