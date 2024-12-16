import Card from "../Card";
import "./ranking.css";

export const Ranking = (props) => {

  if (props.series.length > 0) {
    return (
      <section
        style={{ backgroundColor: props.corSecundaria }}
        className="rank"
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.rankCategoty}</h3>
        <div className="rankFila">
          {props.series.map((serie,index) => (
            <Card
              key = {index}
              img={serie.imagem}
              nome={serie.nome}
              descricao={serie.descricao}
              ranking={serie.ranking}
              id={index} 
              seriesArray={props.seriesArray}
              corPrimaria={props.corPrimaria}
            />
          ))}
        </div>
      </section>
    );
  } else {
    return <div className="rankFila" style={{ display: "none" }}></div>;
  }
};
