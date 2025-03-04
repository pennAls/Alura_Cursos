import { Carrossel } from "../Carrossel/Carrossel";
import style from "./hero.module.css";

export const HeroSection = () => {
  return (
    <section className={style.hero}>
      <div className={style.halfOne}>
        <div className={style.boxTitle}>
          <img
            className={style.logo}
            src="src/assets/imgs/logo2.png"
            alt="Logo"
          />
          <h1 className={style.title}>
            Movies<strong>Library</strong>
          </h1>
        </div>
        <p className={style.subtitle}>
          Não sabe por onde começar? Salve suas produções favoritas, registre
          cada descoberta e organize sua coleção nas nossas estantes virtuais.
        </p>
      </div>
      <div className={style.halfTwo}>
        <Carrossel></Carrossel>
        <input
          className={style.input}
          placeholder="Qual o seu próximo filme?"
          type="text"
        />
      </div>
    </section>
  );
};
