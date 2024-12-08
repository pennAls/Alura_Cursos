export const Classificacao = (props) => {
  return (
    <div className="campoForm">
      <label>{props.label}</label>
      <select name="ranking" id="ranking-select">
        <option value="">-- Classifique sua série --</option>
        <option value="absoluteCinema">Absoulute Cinema</option>
        <option value="muitoBom">Muito Bom</option>
        <option value="bom">Bom</option>
        <option value="regular">Regular</option>
        <option value="ruim">Ruim</option>
        <option value="olhos">Quero arrancar meus olhos</option>
      </select>
    </div>
  );
};


