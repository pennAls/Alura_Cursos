import "./text_label.css"

export const TextLabel = (props) => {
  return (
     <div className="campoForm">
        <label>{props.label}</label>
        <input placeholder={props.placeholder}></input>
      </div>
  );
};
