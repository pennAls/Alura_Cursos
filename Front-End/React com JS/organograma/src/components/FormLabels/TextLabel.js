import "./text_label.css";

export const TextLabel = (props) => {
  const aoDigitar = (event) => {
    const value = event.target.value;
    if (!/\d/.test(value)) {
      props.aoAlterado(value);
    }
  };
  return (
    <div className="campoForm">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={aoDigitar}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};
