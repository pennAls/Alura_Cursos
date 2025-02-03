import { Itarefa } from "../../types/Itarefa";
import Item from "./item";
import style from "./Lista.module.scss";

export const Lista = (props: { tarefas: Itarefa[] }) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {props.tarefas.map((item, index) => (
          <Item key={index} {...item} style={style.item}></Item>
        ))}
      </ul>
    </aside>
  );
};
