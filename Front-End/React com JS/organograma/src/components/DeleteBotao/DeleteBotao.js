import React, { useContext } from "react";
import { SerieContext } from "../Ranking";  // Importa o SerieContext nomeado de Ranking
import "./deletebotao.css";

export const DeleteBotao = () => {
  const { aoDeletarSerie } = useContext(SerieContext);

  return (
    <button onClick={aoDeletarSerie} className="deleteBotao">
      <img src="/imgs/red-trash-can-icon.png" alt="Delete_botão" />
    </button>
  );
};
