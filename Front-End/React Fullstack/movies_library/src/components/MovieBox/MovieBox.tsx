import style from "./moviebox.module.css";

export const MovieBox = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className={`${style.card}`}>
      <img src={src} alt={title} />
      <div className={style.info}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};
