/**
 * AWS routes
 */
import { Router } from "express";
import * as awsController from "../controllers/aws.controller";

const router = Router();

/********************************************************************
 *         GET - get all AWS regions
 *         EXAMPLE - localhost:3000/api/v1/aws/regions
 ********************************************************************/
router.get("/regions", awsController.getRegions);

/***********************************************************************************
 *         GET - get all VPCs of a selected region
 *         EXAMPLE - localhost:3000/api/v1/aws/regions/eu-west-2/vpcs
 ***********************************************************************************/
router.get("/regions/:regionId/vpcs", awsController.getVpcs);

/***********************************************************************************
 *         GET - get all VPCs of a selected region
 *         EXAMPLE - localhost:3000/api/v1/aws/regions/eu-west-2/vpcs/vpc-7b3d7413/subnets
 ***********************************************************************************/
router.get("/regions/:regionId/vpcs/:vpcId/subnets", awsController.getSubnets);

export default router;
