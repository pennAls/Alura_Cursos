const { Router } = require("express");
import type { Request, Response } from "express";
const { getLivros } = require("../controls/livrosControl");
const router = Router();

router.get("/", getLivros);

router.post("/", (req: Request, res: Response) => {
  res.send("Tá querendo postar oq aqui pvt");
});

router.delete("/", (req: Request, res: Response) => {
  res.send("Tá querendo deletar oq aqui pvt");
});

router.patch("/", (req: Request, res: Response) => {
  res.send("Tá querendo editar oq aqui pvt");
});

module.exports = router;
