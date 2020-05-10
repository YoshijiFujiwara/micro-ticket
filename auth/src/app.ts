import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";

import {
  currentUserRouter,
  signinRouter,
  signoutRouter,
  signupRouter,
} from "./routes";
import { errorHandler, NotFoundError } from "@yoshiji-sgtickets/common";

const app = express();
app.set("trust proxy", true); // nginx ingress
app.use(json());
app.use(
  cookieSession({
    signed: false, // JWTをencryptしないように
    secure: process.env.NODE_ENV !== "test",
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

// 'express-async-erros'によって動く
app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
