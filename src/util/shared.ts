/**
 * Util functions for building AWS specific services
 */
import { config } from "./config";
import AWS from "aws-sdk";

const buildEC2Object = (region?: string) => {
  return new AWS.EC2({
    apiVersion: config.ec2.apiVersion,
    region: checkNull(region) ? config.ec2.defaultRegion : region,
  });
};
export default buildEC2Object;

export const checkNull = (str: any): boolean => {
  if (str === undefined || str === "" || str.length === 0) {
    return true;
  }
  return false;
};
