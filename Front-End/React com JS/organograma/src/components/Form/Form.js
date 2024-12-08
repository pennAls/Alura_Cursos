import BotaoForm from "../BotaoForm";
import { Classificacao } from "../FormLabels/";
import { TextLabel } from "../FormLabels/";

import "./form.css";

export const Form = () => {
  const rankings = [
    "-- Classifique sua série --",
    "Absolute Cinema",
    "Muito Bom",
    "Bom",
    "Regular",
    "Ruim",
    "Quero arrancar meus olhos",
  ];
  return (
    <section className="sectionForm">
      <form>
        <h2>Preencha os dados para registrar a sua série.</h2>
        <div className="CampoForm">
          <TextLabel label="Nome" placeholder="Digite o nome da série" />
          <TextLabel
            label="Descrição"
            placeholder="Digite uma descrição para série"
          />
          <TextLabel label="Imagem" placeholder=" Insira uma imagem da série" />
          <Classificacao label="Ranking" itens={rankings} />
          <BotaoForm>
            Adicionar Série
          </BotaoForm>
        </div>
      </form>
    </section>
  );
};
