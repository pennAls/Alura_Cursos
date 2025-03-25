import * as fs from "fs";
import * as path from "path";
const filePath = path.resolve(__dirname, "../movies.json");
const catalogo = fs.readFileSync(filePath, "utf-8");
import { v4 as uuidv4 } from "uuid";

interface Json {
  id: string;
  nome: string;
}

const newMovie: Json = {
  id: uuidv4(),
  nome: "A bela e a fera",
};

export const getCatalogo = () => JSON.parse(catalogo);

export const getMoviebyId = (id: string): Json | undefined => {
  const movies = JSON.parse(catalogo);
  return movies.find((movie: Json) => movie.id === id);
};

export const addMovie = () => {
  const updatedCatalogo = JSON.stringify(
    [...JSON.parse(catalogo), newMovie],
    null,
    2
  );
  return fs.writeFileSync(filePath, updatedCatalogo);
};
