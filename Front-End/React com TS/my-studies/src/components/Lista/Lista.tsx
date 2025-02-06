import { Itarefa } from "../../types/Itarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

export const Lista = ({tarefas}:{tarefas:Itarefa[]}) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item}></Item>
        ))}
      </ul>
    </aside>
  );
};
