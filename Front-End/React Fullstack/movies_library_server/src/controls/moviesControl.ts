import type { Request, Response } from "express";
import { getCatalogo } from "../services/moviesService";
import { addMovie } from "../services/moviesService";

const handleGet = (req: Request, res: Response) => {
  try {
    res.send(getCatalogo());
  } catch (error) {
    res.status(500);
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro desconhecido");
    }
  }
};

const handleAdd = (req: Request, res: Response) => {
  try {
    throw new Error("F");
    res.send(addMovie());
  } catch (error) {
    res.status(500);
    if (error instanceof Error) {
      res.send(`${error.message} | Filme não Adicionado`);
    } else {
      res.send("Erro Desconhecido, por favor entre em contato com o suporte");
    }
  }
};

export { handleAdd, handleGet };
