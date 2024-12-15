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
          {props.series.map((serie) => (
            <Card
              img={serie.imagem}
              nome={serie.nome}
              descricao={serie.descricao}
              ranking={serie.ranking}
              corPrimaria={props.corPrimaria}
              rankCategoty={props.rankCategoty}
            />
          ))}
        </div>
      </section>
    );
  } else {
    return <div className="rankFila" style={{ display: "none" }}></div>;
  }
};
