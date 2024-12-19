import "./Section_1.css";

function Section1() {
  return (
    <section className = "section1">
      <div className = "p1">
        <h1>Como montar o seu Ranking</h1>
        <ol>
            <li>Insira o nome da série</li>
            <li>Uma descrição básica</li>
            <li>Uma imagem de referência</li>
            <li>Classifique de acordo com as opções</li>
            <li>Envie o Formulário</li>
        </ol>
      </div>
      <div className = "p2">
        <img src="/imgs/cinema.png" alt="logo_imagem"></img>
      </div>
    </section>
  );
}

export default Section1;
