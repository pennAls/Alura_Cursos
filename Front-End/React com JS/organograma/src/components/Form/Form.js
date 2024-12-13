import BotaoForm from "../BotaoForm";
import { Classificacao } from "../FormLabels/";
import { TextLabel } from "../FormLabels/";
import React, { useState } from "react";

import "./form.css";

export const Form = (props) => {

  const [inputName, setName] = useState("");
  const [inputDescricao, setDescricao] = useState("");
  const [inputImage, setImage] = useState("");
  const [ranking, setRanking] = useState("");

  const aoEnviar = (event) => {
    event.preventDefault();
    console.log(
      `Forms Submetido

      Nome da Série: ${inputName}
      Descrição: ${inputDescricao}
      Imagem: ${inputImage}
      Ranking: ${ranking}`
    );
    props.aoCadastrarSerie({
      nome: inputName,
      descricao: inputDescricao,
      imagem: inputImage,
      ranking,
    });
  };

  return (
    <section className="sectionForm">
      <form onSubmit={aoEnviar}>
        <h2>Preencha os dados para registrar a sua série.</h2>
        <div className="CampoForm">
          <TextLabel
            value={inputName}
            aoAlterado={(valor) => setName(valor)}
            obrigatorio={true}
            label="Nome"
            placeholder="Digite o nome da série"
          />
          <TextLabel
            value={inputDescricao}
            aoAlterado={(valor) => setDescricao(valor)}
            obrigatorio={true}
            label="Descrição"
            placeholder="Digite uma descrição para série"
          />
          <TextLabel
            value={inputImage}
            aoAlterado={(valor) => setImage(valor)}
            label="Imagem"
            placeholder=" Insira uma imagem da série"
          />
          <Classificacao
            value={ranking}
            aoAlterado={(valor) => setRanking(valor)}
            obrigatorio={true}
            label="Ranking"
            itens={props.rankings.map((ranking) => ranking.rank)}
          />
          <BotaoForm>Adicionar Série</BotaoForm>
        </div>
      </form>
    </section>
  );
};
