import express, { Request, Response } from "express";
import { requireAuth } from "@yoshiji-sgtickets/common";
import { Order } from "../models/order";

const router = express.Router();

router.get("/api/orders", requireAuth, async (req: Request, res: Response) => {
  const orders = await Order.find({
    userId: req.currentUser!.id,
  }).populate("ticket");

  res.send(orders);
});

export { router as indexOrderRouter };
export * from "./new";
export * from "./show";
export * from "./delete";
