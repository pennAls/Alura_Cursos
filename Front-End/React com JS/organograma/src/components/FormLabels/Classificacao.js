export const Classificacao = (props) => {
  return (
    <div className="campoForm">
      <label>{props.label}</label>
      <select
        value={props.value}
        onChange={(event) => props.aoAlterado(event.target.value)}
        required={props.obrigatorio}
        name="ranking"
        id="ranking-select"
      >
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
