import "./ranking.css";

export const Ranking = (props) => {
  return (
    <section style={{ backgroundColor: props.corSecundaria }} className="rank">
      <h3 style={{ borderColor: props.corPrimaria }}>{props.rank}</h3>
    </section>
  );
};
