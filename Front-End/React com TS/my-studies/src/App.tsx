import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import style from "./App.module.scss";
import Cronometro from "./components/Cronometro";
import { useState } from "react";
import { Itarefa } from "./types/Itarefa";

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}></Formulario>
      <Lista tarefas={tarefas}></Lista>
      <Cronometro></Cronometro>
    </div>
  );
}

export default App;
