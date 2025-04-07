import { moviesList } from "../../common/utils/dadosPesquisa.ts";
import { moviesType } from "../../types/moviesType.ts";
import { useContext } from "react";
import { searchContext } from "../../routes/Home/Home.tsx";
import { getMovies } from "../../services/moviesService.ts";

export const SearchInput = ({ style }: CSSModuleClasses) => {
  const { setSearchedMovies } = useContext(searchContext);
  return (
    <>
      <input
        className={style}
        onChange={(e) => {
          const pesquisaUser = e.target.value;
          // getMovies();
          if (pesquisaUser === "") {
            setSearchedMovies([]);
          } else {
            const resultadoPesquisa = moviesList.filter((movie: moviesType) =>
              movie.nome.toLowerCase().includes(pesquisaUser.toLowerCase())
            );
            setSearchedMovies(resultadoPesquisa);
          }
        }}
        placeholder="Qual o seu próximo filme?"
        type="text"
      />
    </>
  );
};
