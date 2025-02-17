import { useContext, useEffect, useRef, useState } from "react";
import { TarefaContext } from "../../App";
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./cronometro.module.scss";
import { secondsToTime, timeToSeconds } from "../../common/utils/time";
import { Itarefa } from "../../types/Itarefa";

interface Props {
  finishTarefa: () => void;
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>;
}

export const Cronometro = ({ finishTarefa, setTarefas }: Props) => {
  const { selectedTarefa } = useContext(TarefaContext);
  const tempo = (selectedTarefa as Itarefa)?.tempo ?? "00:00:00";
  const [tempoSeconds, setTempo] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isPaused = useRef<boolean>(false);

  useEffect(() => {
    setTempo(timeToSeconds(tempo));
  }, [selectedTarefa, tempo]);

  const atualizarCronometroRodando = (valor: boolean) => {
    setTarefas((tarefasAntigas) =>
      tarefasAntigas.map((tarefa) =>
        tarefa.id === selectedTarefa?.id
          ? {
              ...tarefa,
              isCronometroRodando: valor,
            }
          : tarefa
      )
    );
  };

  const regressiva = (tempo: number) => {
    if (tempo > 0 && !isPaused.current && selectedTarefa) {
      timerRef.current = setTimeout(() => {
        const updatedTempo = tempo - 1;
        setTarefas((tarefasAntigas) =>
          tarefasAntigas.map((tarefa) =>
            tarefa.id === selectedTarefa.id
              ? {
                  ...tarefa,
                  tempo: secondsToTime(updatedTempo),
                  isCronometroRodando: true,
                }
              : tarefa
          )
        );
        setTempo(updatedTempo);
        regressiva(updatedTempo);
      }, 1000);
    } else {
      finishTarefa();
    }
  };

  const pausarCronometro = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      isPaused.current = true;
      atualizarCronometroRodando(false);
    }
  };

  const retomarCronometro = () => {
    isPaused.current = false;
    atualizarCronometroRodando(true);
    regressiva(tempoSeconds);
  };

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um Card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempoSeconds} />
      </div>
      <div>
        <Botao
          onClick={() => {
            if (isPaused.current) {
              retomarCronometro();
            } else {
              regressiva(tempoSeconds);
            }
          }}
        >
          {isPaused.current ? "Retomar" : "Começar"}
        </Botao>
        <Botao onClick={pausarCronometro}>Pausar</Botao>
      </div>
    </div>
  );
};
