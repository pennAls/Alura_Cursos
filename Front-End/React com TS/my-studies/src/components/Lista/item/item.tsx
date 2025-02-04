import { useEffect } from "react";
import { Itarefa } from "../../../types/Itarefa";
import style from '../Lista.module.scss';

export const Item = ({ tarefa, tempo, selected, completed, id }: Itarefa) => {
  useEffect(() => {
    console.log("item atual renderizado: ", { tarefa, tempo, selected, completed, id });
  }, [tarefa, tempo, selected, completed, id]);

  return (
    <li className ={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
};


