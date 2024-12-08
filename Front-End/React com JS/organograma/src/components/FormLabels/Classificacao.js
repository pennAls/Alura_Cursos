export const Classificacao = (props) => {
  return (
    <div className="campoForm">
      <label>{props.label}</label>
      <select name="ranking" id="ranking-select">
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
