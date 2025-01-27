export const Item = ({
  tarefa,
  tempo,
  style,
}: {
  tarefa: string;
  tempo: string;
  style: string;
}) => {
  return (
    <li className={style}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
};
