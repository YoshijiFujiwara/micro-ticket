import express, { Request, Response } from "express";
import { requireAuth } from "@yoshiji-sgtickets/common";

const router = express.Router();

router.post(
  "/api/tickets",
  requireAuth,
  async (req: Request, res: Response) => {
    res.sendStatus(200);
  }
);

export { router as createTicketRouter };
