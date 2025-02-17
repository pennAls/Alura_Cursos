import {useContext} from "react";
import { Itarefa } from "../../../types/Itarefa";
import style from "../Lista.module.scss";
import { SelectContext, TarefaContext } from "../../../App";

export const Item = ({
  tarefa,
  tempo,
  selected,
  completed,
  id,
  isCronometroRodando,
}: Itarefa) => {
  const { selectTarefa } = useContext(SelectContext);
   const {tarefas} = useContext(TarefaContext);

  // useEffect(() => {
  //   console.log("item atual renderizado: ", {
  //     tarefa,
  //     tempo,
  //     selected,
  //     completed,
  //     id,
  //   });
  // }, [tarefa, tempo, selected, completed, id]);

  const handleClick = () => {
    const cronometroRodando = tarefas.some(tarefa => tarefa.isCronometroRodando);
    if (cronometroRodando) {
      alert("Pause a tarefa atual antes de mudar!");
    } else {
      selectTarefa({ tarefa, id, tempo, selected, completed });
    }
  };

  return (
    <li
      onClick={handleClick}
      className={`${style.item} ${selected ? style.itemSelecionado : ""} ${
        completed ? style.itemCompletado : ""
      }`}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completed && <span className={style.concluido}></span>}
    </li>
  );
};
