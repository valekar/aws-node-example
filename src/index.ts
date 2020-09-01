/**
 * Starting point - this is where initialization occurs
 */
import "./util/config";
import express, { Request, Response } from "express";
import { NOT_FOUND } from "http-status-codes";
import BaseRouter from "./routes/base.router";
import * as CONSTANTS from "./util/constants";
import swaggerUi from "swagger-ui-express";

import { swaggerDocument } from "../swagger/swagger";

//load the environment file
let port = Number(process.env.PORT) || 3000;

//initialize the express application
const app = express();
//handle PUT/POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//api routes
app.use("/api/v1", BaseRouter);
// Configure swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//catch all route
app.get("*", (_: Request, res: Response) => {
  res.status(NOT_FOUND).json({ message: CONSTANTS.COULD_NOT_FIND_RESOURCE });
});

//this server export is used in tests
export const server = app.listen(port, () => {
  console.log(CONSTANTS.SERVER_STARTED + port);
});
//this app export is used in test tests
export default app;
