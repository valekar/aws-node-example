export const getSubnets = {
  tags: ["Subnets"],
  description: "Returns all the subnets from a given vpc id and region id",

  produces: ["application/json"],
  parameters: [
    {
      in: "path",
      name: "regionId",
      description: "Example region - eu-north-1",
    },
    {
      in: "path",
      name: "vpcId",
      description: "Example vpcId - vpc-0111b368",
    },
  ],
  responses: {
    "200": {
      description: "A list of aws vpcs for a given region.",
      content: {
        "*/*": {
          example: {
            Subnets: [
              {
                AvailabilityZone: "eu-north-1b",
                AvailabilityZoneId: "eun1-az2",
                AvailableIpAddressCount: 4091,
                CidrBlock: "172.31.32.0/20",
                DefaultForAz: true,
                MapPublicIpOnLaunch: true,
                MapCustomerOwnedIpOnLaunch: false,
                State: "available",
                SubnetId: "subnet-485a9833",
                VpcId: "vpc-0111b368",
                OwnerId: "secret",
                AssignIpv6AddressOnCreation: false,
                Ipv6CidrBlockAssociationSet: [],
                Tags: [],
                SubnetArn:
                  "arn:aws:ec2:eu-north-1:secret:subnet/subnet-485a9833",
              },
            ],
          },
        },
      },
    },
  },
};
