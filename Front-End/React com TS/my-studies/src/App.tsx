import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import style from "./App.module.scss";
import Cronometro from "./components/Cronometro";
import { useState, createContext } from "react";
import { Itarefa } from "./types/Itarefa";

export const SelectContext = createContext<{
  selectTarefa: (selectedTarefa: Itarefa) => void;
}>({
  selectTarefa: () => {},
});

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  const [selectedTarefa, setSelectedTarefa] = useState<Itarefa | {}>({});

  const selectTarefa = (selectedTarefa: Itarefa) => {
    setSelectedTarefa(selectedTarefa);
    setTarefas(tarefasAntigas => tarefasAntigas.map((tarefa) => ({...tarefa,selected: tarefa.id === selectedTarefa.id ? true:false
    })))
  
  };
  return (
    <SelectContext.Provider value={{ selectTarefa }}>
      <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas} />
        <Lista tarefas={tarefas} />
        <Cronometro />
      </div>
    </SelectContext.Provider>
  );
}

export default App;
