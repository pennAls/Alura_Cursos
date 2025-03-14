import * as fs from "fs";
import * as path from "path";
const filePath = path.resolve(__dirname, "../movies.json");
const catalogo = fs.readFileSync(filePath, "utf-8");
const newMovie = {
  id: "1",
  nome: "A bela e a fera",
};

export const getCatalogo = () => JSON.parse(catalogo);

export const addMovie = () => {
  const updatedCatalogo = JSON.stringify(
    [...JSON.parse(catalogo), newMovie],
    null,
    2
  );
  return fs.writeFileSync(filePath, updatedCatalogo);
};
