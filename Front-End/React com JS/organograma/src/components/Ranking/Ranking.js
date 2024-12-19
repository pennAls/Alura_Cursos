import React, { createContext } from "react";
import Card from "../Card";
import "./ranking.css";

export const SerieContext = createContext(); 

const Ranking = (props) => {
  return (
    props.series.length > 0 && (
      <section
        style={{ backgroundColor: props.corSecundaria }}
        className="rank"
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.rankCategory}</h3>
        <div className="rankFila">
          {props.series.map((serie) => (
           <SerieContext.Provider key={serie.nome} value={{ aoDeletarSerie: () => props.aoDeletarSerie(serie) }}> {/* Passando o objeto completo da serie */}    {/* TODOS OS FILHOS DE CARD VÃO TER ACESSO A ESSE VALUE */}
              <Card
                img={serie.imagem}
                nome={serie.nome}
                descricao={serie.descricao}
                ranking={serie.ranking}
                corPrimaria={props.corPrimaria}
                // deletarCard={() => aoDeletarSerie(index) // Versão sem REACT CONTEXT//  } 
              />
            </SerieContext.Provider>
          ))}
        </div>
      </section>
    )
  );
};

export default Ranking;
