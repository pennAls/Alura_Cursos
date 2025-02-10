import { useContext} from "react";
import { Itarefa } from "../../../types/Itarefa";
import style from "../Lista.module.scss";
import { SelectContext } from "../../../App";

export const Item = ({ tarefa, tempo, selected, completed, id }: Itarefa) => {
  const { selectTarefa } = useContext(SelectContext);

  // useEffect(() => {
  //   console.log("item atual renderizado: ", {
  //     tarefa,
  //     tempo,
  //     selected,
  //     completed,
  //     id,
  //   });
  // }, [tarefa, tempo, selected, completed, id]);

  return (
    <li
      onClick={() => !completed &&
        selectTarefa({
          tarefa,
          id,
          tempo,
          selected,
          completed,
        })
      }
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
