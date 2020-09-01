# An AWS example for Node, express

This project is an example for showing the usage of AWS services with expressJS. This application is written in Typescript. This project has 3 following APIs

1. Get Regions - Get all the regions where AWS is supported.
2. Get VPCs - Get all the virtual private clouds in a given region.
3. Get Subnets - Get all the subnets of a given vpc.

## How to use this application?

1. Make sure you have added necessary credentials (API Secret and API client from your AWS account) in your system. It should be present in your home directory - **~/.aws/credentials** file

2. Clone the repository

   ```bash
   git clone https://github.com/valekar/aws-node-example.git
   ```

3. Extract and go the root directory

   ```bash
   cd aws-node-example
   ```

4. Install node modules

   ```bash
   npm install
   ```

5. Run the application in **development** mode. Run the following command

   ```bash
   npm run start:dev
   ```

6. Now open the swagger UI to test the APIs. You can access the screen by using - <http://localhost:3000/api-docs/> . Please make sure to run this application in the **development mode** . Use the above **npm** command to the application in development mode.

## Other Commands

1. To test the application. Run the following command

   ```bash
   npm run test
   ```

2. To build and start the application, run the following command.

   ```bash
   npm run start
   ```

### Example routes

1. To get all regions, use api - _localhost:3000/api/v1/aws/regions_

2. To get all VPCs of a region, use this example api - _localhost:3000/api/v1/aws/regions/eu-west-2/vpcs_

3. To get all subnets of a VPC, us this example api - _localhost:3000/api/v1/aws/regions/eu-west-2/vpcs/vpc-7b3d7413/subnets_
