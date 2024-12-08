import "./Header.css";

export const Header = () => {
  return (
    <header className="headerBanner">
      <div className="titlePage">
        <span>Series-Ranking.com</span>
      </div>
      <nav className="headerNav">
        <ul>
          <li>Meus Rankins</li>
          <li>Compartilhe seu Rankeamento</li>
          <li>Limpar Rankeamento</li>
        </ul>
      </nav>
      <button>Faça o seu Ranking</button>
    </header>
  );
};
