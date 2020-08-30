/* 
    BaseRouter - This file contains all the routes of the application
 */
import { Router } from "express";
import AWSRouter from "./awsRouter";
const router = Router();

router.use("/aws", AWSRouter);

export default router;
