import React from "react";
import style from "./Botao.module.scss";

export class Botao extends React.Component<{
  children: string;
  type?: "submit";
  onClick?: () => void;
}> {
  render() {
    const { type = "button", onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.botao}>
        {this.props.children}
      </button>
    );
  }
}

// A linha const { type = "button" } = this.props; utiliza a desestruturação das props, e ao mesmo tempo, define um valor padrão para o type caso ele não seja passado.
// Se this.props.type for fornecido, esse valor será usado.
// Se this.props.type não for fornecido, o valor padrão "button" será utilizado.
