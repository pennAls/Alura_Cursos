import DeleteBotao from "../DeleteBotao";
import "./card.css";

export const Card = ({ img, nome,descricao, corPrimaria }) => {
  return (
    <div className="divCard">
      <div className="firstHalf" style={{ backgroundColor: corPrimaria }}>
        <img className="imageCard" src={img} alt={nome}></img>
      </div>
      <div className="secondHalf">
        <h4>{nome}</h4>
        <p>{descricao}</p>
        <div className="delete">
          {<DeleteBotao /* deleteCard={deletarCard}*/ />}   {/* SEM REACT CONTEXT */}
        </div>
      </div>
    </div>
  );
};
