import { useState } from "react";
import style from "./header.module.css";
import sacola from "/src/assets/imgs/sacola.svg";
import perfil from "/src/assets/imgs/perfil.svg";
import hamburguerMenu from "/src/assets/imgs/hamburger-menu.svg";
import { ConfigProvider, Menu } from "antd";

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const headerOptions = [
    {
      key: "1",
      label: "CATEGORIAS",
    },
    { key: "2", label: "ESTANTE" },
    { key: "3", label: "FAVORITOS" },
  ];
  const icones = [sacola, perfil];

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className={style.header}>
      <button
        onClick={toggleMenu}
        className={style.menu_hamburguer}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <img
          src={hamburguerMenu}
          className={style.menu_hamburguer}
          alt="Menu"
        />
      </button>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemActiveBg: "#1c274c",
              itemSelectedBg: "#1c274c",
              itemSelectedColor: "white",
              itemHoverBg: "#6fa7eb;",
              itemHoverColor: "white",
              fontSize: 20,
            },
          },
        }}
      >
        {menuVisible && (
          <Menu
            rootClassName={style.menu}
            items={headerOptions}
            style={{
              position: "absolute",
              top: "82px",
              left: "-1px",
              width: "256px",
              padding: "16px",
            }}
          />
        )}
      </ConfigProvider>
      <div className={style.divHeader}>
        <img
          className={style.logo}
          src="src/assets/imgs/video-library.svg"
          alt="Logo"
        />
        <p className={style.pTypographyHeader}>
          Movies<strong>Library</strong>
        </p>
      </div>
      <ul className={style.linksHeader}>
        {headerOptions.map((option, index) => (
          <li key={index}>
            <p className={style.headerOption}>{option.label}</p>
          </li>
        ))}
      </ul>
      <ul className={style.iconesHeader}>
        {icones.map((icone, index) => (
          <li key={index} className={style.icone}>
            <img src={icone} alt="Ícone" />
          </li>
        ))}
      </ul>
    </header>
  );
};
