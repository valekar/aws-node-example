export const getRegions = {
  tags: ["Regions"],
  description: "Returns all the regions from AWS",
  security: [
    {
      bearerAuth: [],
    },
  ],
  produces: ["application/json"],
  responses: {
    "200": {
      description: "A list of aws regions.",
      content: {
        "*/*": {
          example: {
            Regions: [
              {
                Endpoint: "ec2.eu-north-1.amazonaws.com",
                RegionName: "eu-north-1",
                OptInStatus: "opt-in-not-required",
              },
              {
                Endpoint: "ec2.ap-south-1.amazonaws.com",
                RegionName: "ap-south-1",
                OptInStatus: "opt-in-not-required",
              },
            ],
          },
        },
      },
    },
  },
};
