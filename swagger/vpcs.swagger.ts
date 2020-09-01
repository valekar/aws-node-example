export const getVpcs = {
  tags: ["Vpcs"],
  description: "Returns all the Vpcs from a given region",

  produces: ["application/json"],
  parameters: [
    {
      in: "path",
      name: "regionId",
      description: "Example region - eu-north-1",
    },
  ],
  responses: {
    "200": {
      description: "A list of aws vpcs for a given region.",
      content: {
        "*/*": {
          example: {
            Vpcs: [
              {
                CidrBlock: "172.31.0.0/16",
                DhcpOptionsId: "dopt-9dbe13f4",
                State: "available",
                VpcId: "vpc-0111b368",
                OwnerId: "secret",
                InstanceTenancy: "default",
                Ipv6CidrBlockAssociationSet: [],
                CidrBlockAssociationSet: [
                  {
                    AssociationId: "vpc-cidr-assoc-6a73de03",
                    CidrBlock: "172.31.0.0/16",
                    CidrBlockState: {
                      State: "associated",
                    },
                  },
                ],
                IsDefault: true,
                Tags: [],
              },
            ],
          },
        },
      },
    },
  },
};
