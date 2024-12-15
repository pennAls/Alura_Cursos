import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Section1 from "./components/Section_1/Section_1";
import Ranking from "./components/Ranking";

function App() {
  const rankings = [
    {
      rank: "Absolute Cinema",
      corPrimaria: "#ffd500",
      corSecundaria: "#feffc1",
    },
    {
      rank: "Muito Bom",
      corPrimaria: "#59829b",
      corSecundaria: "#eaeff4",
    },
    {
      rank: "Bom",
      corPrimaria: "#ff3333",
      corSecundaria: "#ffdfdf",
    },
    {
      rank: "Regular",
      corPrimaria: "#ff6932",
      corSecundaria: "#ffe4d3",
    },
    {
      rank: "Ruim",
      corPrimaria: "#00ccff",
      corSecundaria: "#def6ff",
    },
    {
      rank: "Quero arrancar meus olhos",
      corPrimaria: "#533bff",
      corSecundaria: "#e4e4ff",
    },
  ];

  const [series, setSerie] = useState([]);

  const CadastrarSerie = (serie) => {
    console.log(serie);
    setSerie([...series, serie]);
  };

  return (
    <div className="App">
      <Header />
      <Section1 />
      <Form
        rankings={rankings}
        aoCadastrarSerie={(serie) => CadastrarSerie(serie)}
      />
      {rankings.map((ranking) => (
        <Ranking
          rankCategoty={ranking.rank}
          key={ranking.rank}
          corPrimaria={ranking.corPrimaria}
          corSecundaria={ranking.corSecundaria}
          series={series.filter((serie) => serie.ranking === ranking.rank)}
        />
      ))}
    </div>
  );
}

export default App;
