import { Router } from "express";
import { getPortfolio } from "../data/portfolio";

const router = Router();

router.get("/", (_req, res) => {
  res.json(getPortfolio());
});

export default router;
