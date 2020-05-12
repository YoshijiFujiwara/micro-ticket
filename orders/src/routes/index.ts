import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/orders", async (req: Request, res: Response) => {
  res.send({});
});

export { router as indexOrderRouter };
export * from "./new";
export * from "./show";
export * from "./delete";
