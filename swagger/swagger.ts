import { getRegions } from "./regions.swagger";
import { getVpcs } from "./vpcs.swagger";
import { getSubnets } from "./subnets.swagger";

export const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "APIs Document",
    description:
      "AWS node example - Get Regions, VPCs of a region, Subnets of a Vpc",
    termsOfService: "",
    contact: {
      name: "Srinivas Prashanth Valekar",
      email: "srinivas.valekar@gmail.com",
      url: "https://github.com/valekar",
    },
    license: {
      name: "MIT",
    },
  },
  schemes: ["http"],
  servers: [
    {
      url: "http://localhost:3000/api/v1",
      description: "Local server",
    },
  ],

  paths: {
    "/aws/regions": {
      get: getRegions,
    },

    "/aws/regions/{regionId}/vpcs": {
      get: getVpcs,
    },
    "/aws/regions/{regionId}/vpcs/{vpcId}/subnets": {
      get: getSubnets,
    },
  },
};
