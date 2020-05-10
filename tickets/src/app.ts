import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import {
  errorHandler,
  NotFoundError,
  currentUser,
} from "@yoshiji-sgtickets/common";
import {
  createTicketRouter,
  showTicketRouter,
  indexTicketRouter,
  updateTicketRouter,
} from "./routes";

const app = express();
app.set("trust proxy", true); // nginx ingress
app.use(json());
app.use(
  cookieSession({
    signed: false, // JWTをencryptしないように
    secure: process.env.NODE_ENV !== "test",
  })
);
app.use(currentUser);

app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);

// 'express-async-erros'によって動く
app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
