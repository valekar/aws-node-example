/**
 * Starting point - this is where initialization occurs
 */
import "./util/config";
import express, { Request, Response } from "express";
import { NOT_FOUND } from "http-status-codes";
import BaseRouter from "./routes/base.router";
import * as CONSTANTS from "./util/constants";

//load the environment file
let port = Number(process.env.PORT) || 3000;

//initialize the express application
const app = express();
//handle PUT/POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", BaseRouter);

app.get("*", (req: Request, res: Response) => {
  res.status(NOT_FOUND).json({ message: CONSTANTS.COULD_NOT_FIND_RESOURCE });
});

//this server export is used in tests
export const server = app.listen(port, () => {
  console.log(CONSTANTS.SERVER_STARTED + port);
});
//this app export is used in test tests
export default app;
