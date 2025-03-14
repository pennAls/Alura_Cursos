import { Router } from "express";
import type { Request, Response } from "express";
import { handleAdd, handleGet } from "../controls/moviesControl";

export const rotaMovies = Router();

rotaMovies.get("/", handleGet);

rotaMovies.post("/", handleAdd);

rotaMovies.delete("/", (req: Request, res: Response) => {
  res.send("Tá querendo deletar oq aqui pvt");
});

rotaMovies.patch("/", (req: Request, res: Response) => {
  res.send("Tá querendo editar oq aqui pvt");
});
