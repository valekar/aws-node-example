import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { NOT_FOUND } from "http-status-codes";
import BaseRouter from "./routes/baseRouter";
import * as CONSTANTS from "./util/constants";

//load the environment file
const loaded = dotenv.config({ path: "./env/development.env" });
let port = 3000;
if (loaded.error) {
  console.log(CONSTANTS.COULD_NOT_LOAD_ENVIRONMENT);
} else {
  port = Number(process.env.PORT);
}
//initialize the express application
const app = express();
//handle PUT/POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", BaseRouter);

app.get("*", (req: Request, res: Response) => {
  res.status(NOT_FOUND).json({ message: CONSTANTS.COULD_NOT_FIND_RESOURCE });
});

app.listen(port, () => {
  console.log(CONSTANTS.SERVER_STARTED + port);
});
