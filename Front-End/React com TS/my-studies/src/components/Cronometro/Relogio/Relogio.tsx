import style from "./relogio.module.scss";

interface Props {
  tempo: number;
}

export const Relogio = ({ tempo }: Props) => {
  let minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;

  return (
    <>
      <span className={style.relogioNumero}>
        {String(minutos).padStart(2, "0")[0]}
      </span>
      <span className={style.relogioNumero}>
        {String(minutos).padStart(2, "0")[1]}
      </span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>
        {String(segundos).padStart(2, "0")[0]}
      </span>
      <span className={style.relogioNumero}>
        {String(segundos).padStart(2, "0")[1]}
      </span>
    </>
  );
};
