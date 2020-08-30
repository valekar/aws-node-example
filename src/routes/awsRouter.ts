import { Request, Response, Router } from "express";
import { INTERNAL_SERVER_ERROR, OK } from "http-status-codes";
import buildEC2Object, { checkNull } from "../util/shared";
import { ParamsDictionary } from "express-serve-static-core";
import * as CONSTANTS from "../util/constants";

const router = Router();

/********************************************************************
 *         GET - get all AWS regions
 *         EXAMPLE - localhost:3000/api/aws/regions
 ********************************************************************/
router.get("/regions", async (req: Request, res: Response) => {
  try {
    const ec2 = buildEC2Object("");
    const result = await ec2.describeRegions({}).promise();

    return res.status(OK).json(result);
  } catch (err) {
    console.log(err);
    return res.status(INTERNAL_SERVER_ERROR).json({
      error: err.message,
    });
  }
});

/***********************************************************************************
 *         GET - get all VPCs of a selected region
 *         EXAMPLE - localhost:3000/api/aws/regions/eu-west-2/vpcs
 ***********************************************************************************/
router.get("/regions/:regionId/vpcs", async (req: Request, res: Response) => {
  try {
    const { regionId } = req.params as ParamsDictionary;

    if (checkNull(regionId)) {
      throw Error(CONSTANTS.INVALID_REGION_ID);
    }
    const ec2 = buildEC2Object(regionId);
    const result = await ec2.describeVpcs().promise();
    return res.status(OK).json(result);
  } catch (err) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      error: err.message,
    });
  }
});

/***********************************************************************************
 *         GET - get all VPCs of a selected region
 *         EXAMPLE - localhost:3000/api/aws/regions/eu-west-2/vpcs/vpc-7b3d7413/subnets
 ***********************************************************************************/
router.get(
  "/regions/:regionId/vpcs/:vpcId/subnets",
  async (req: Request, res: Response) => {
    try {
      const { regionId, vpcId } = req.params as ParamsDictionary;
      if (checkNull(regionId) || checkNull(vpcId)) {
        throw Error(CONSTANTS.INVALID_REGION_ID_AND_VPC_ID);
      }

      const ec2 = buildEC2Object();
      const result = await ec2.describeSubnets({}).promise();
      return res.status(OK).json(result);
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR).json({
        error: err.message,
      });
    }
  }
);

export default router;
