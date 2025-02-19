import Formulario from "./components/Formulario";
import Lista from "./components/Lista/";
import style from "./App.module.scss";
import Cronometro from "./components/Cronometro";
import { useState, createContext } from "react";
import { Itarefa } from "./types/Itarefa";

export const SelectContext = createContext<{
  selectTarefa: (selectedTarefa: Itarefa) => void;
}>({
  selectTarefa: () => {},
});

export const TarefaContext = createContext<{
  selectedTarefa: Itarefa | undefined;
  tarefas: Itarefa[];
}>({
  tarefas: [],
  selectedTarefa: undefined,
});

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  const [selectedTarefa, setSelectedTarefa] = useState<Itarefa | undefined>();

  const selectTarefa = (selectedTarefa: Itarefa) => {
    setSelectedTarefa(selectedTarefa);
    setTarefas((tarefasAntigas) =>
      tarefasAntigas.map((tarefa) => ({
        ...tarefa,
        selected: tarefa.id === selectedTarefa.id ? true : false,
      }))
    );
  };

  const finishTarefa = () => {
    if (selectedTarefa) {
      setSelectedTarefa(undefined);
      setTarefas((tarefasAntigas) =>
        tarefasAntigas.map((tarefa) => ({
          ...tarefa,
          completed: tarefa.id === selectedTarefa.id ? true : tarefa.completed,
          selected: false,
          isCronometroRodando: false,
        }))
      );
    }
  };

  return (
    <SelectContext.Provider value={{ selectTarefa }}>
      <TarefaContext.Provider value={{ selectedTarefa, tarefas }}>
        <div className={style.AppStyle}>
          <Formulario setTarefas={setTarefas} />
          <Lista tarefas={tarefas} />
          <Cronometro finishTarefa={finishTarefa} setTarefas={setTarefas} />
        </div>
      </TarefaContext.Provider>
    </SelectContext.Provider>
  );
}

export default App;
