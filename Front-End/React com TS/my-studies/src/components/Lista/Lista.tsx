import Item from "./item";
import style from "./Lista.module.scss";

export const Lista = () => {
  const tarefas = [
    {
      tarefa: "X",
      tempo: "02:00:00",
    },
    {
      tarefa: "Y",
      tempo: "01:00:00",
    },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key ={index} {...item} style={style.item}></Item>
        ))}
      </ul>
    </aside>
  );
};
