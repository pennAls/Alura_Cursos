import type { Request, Response } from "express";
const getLivros = (req: Request, res: Response) => {
  try {
    // throw new Error("teste");
    res.send("Foi");
  } catch (error) {
    res.status(500);
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro desconhecido");
    }
  }
};

module.exports = {
  getLivros,
};
