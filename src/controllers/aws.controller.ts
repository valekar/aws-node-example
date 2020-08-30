import { Request, Response } from "express";
import { INTERNAL_SERVER_ERROR, OK } from "http-status-codes";
import buildEC2Object, { checkNull } from "../util/shared";
import { ParamsDictionary } from "express-serve-static-core";
import * as CONSTANTS from "../util/constants";

/*
 Route : /regions
 Description : controller for getting all regions
*/
export const getRegions = async (req: Request, res: Response) => {
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
};

/*
    Route : /regions/:regionId/vpcs
    Description : controller for getting all vpcs of a given region id
*/
export const getVpcs = async (req: Request, res: Response) => {
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
};
/*
    Route : /regions/:regionId/vpcs/:vpcId/subnets
    Description : controller getting all subnets for given region id and vpc id
*/
export const getSubnets = async (req: Request, res: Response) => {
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
};
