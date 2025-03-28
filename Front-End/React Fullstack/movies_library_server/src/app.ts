import express from "express";
import { rotaMovies } from "./routes/movies";

const app = express();
const port = 8000;

app.use(express.json());
app.use("/movies", rotaMovies);

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
