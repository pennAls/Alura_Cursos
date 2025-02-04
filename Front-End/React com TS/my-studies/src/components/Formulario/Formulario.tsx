import React from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { Itarefa } from "../../types/Itarefa";
import { v4 as uuidv4 } from "uuid";

export class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>;
}> {
  state = {
    tarefa: "",
    tempo: "",
  };

  render() {
    const aoEnviar = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      this.props.setTarefas((tarefasAntigas) => [
        ...tarefasAntigas,
        { ...this.state, selected: false, completed: false, id: uuidv4() },
      ]
    );
      this.setState({ tarefa: "", tempo: "" });
    };

    return (
      <form onSubmit={aoEnviar} className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo Estudo</label>
          <input
            value={this.state.tarefa}
            onChange={(e) => {
              this.setState({ ...this.state, tarefa: e.target.value });
            }}
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            value={this.state.tempo}
            onChange={(e) => {
              this.setState({ ...this.state, tempo: e.target.value });
            }}
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao type="submit">Adicionar</Botao>
      </form>
    );
  }
}
