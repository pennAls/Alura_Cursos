export const Classificacao = (props) => {
  return (
    <div className="campoForm">
      <label>{props.label}</label>
      <select
        value={props.value}
        onChange={(event) => props.aoAlterado(event.target.value)} 
        name="ranking"
        id="ranking-select"
      >
        <option value="" disabled>
          Selecione uma opção
        </option>
        {props.itens.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
