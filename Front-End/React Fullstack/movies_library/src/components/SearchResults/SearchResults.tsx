import { Card } from "antd";
import { moviesType } from "../../types/moviesType";
const { Meta } = Card;
import style from "./searchresults.module.css";

export const SearchResults = ({
  searchedMovies,
}: {
  searchedMovies: moviesType[];
}) => {
  return (
    <div className={style.searchResultsBox}>
      {searchedMovies.map((movie) => (
        <Card
          key={movie.id}
          hoverable
          style={{
            width: 400,
            fontFamily: '"Shafarik", "Roboto", "Arial", serif',
          }}
          cover={<img alt={movie.nome} src={movie.src} alt={movie.nome} />}
        >
          <Meta title={movie.nome} />
        </Card>
      ))}
    </div>
  );
};
