/**
 * Spec file for testing routes
 */
import app, { server } from "../src/index";
import supertest, { Response, SuperTest, Test } from "supertest";
import { OK, NOT_FOUND } from "http-status-codes";
import { COULD_NOT_FIND_RESOURCE } from "../src/util/constants";

describe("AWSRouter", () => {
  let agent: SuperTest<Test>;

  const getRegions = "/api/aws/regions";
  const getVpcs = "/api/aws/regions/eu-west-2/vpcs";
  const getSubnets = "/api/aws/regions/eu-north-1/vpcs/vpc-0111b368/subnets";
  const randomURL = "/random/string";

  beforeAll((done) => {
    agent = supertest.agent(app);
    done();
  });

  afterAll(() => {
    server.close();
  });

  describe("GET:api/aws/getRegions", () => {
    it("should return a JSON object with status OK, if request was successful", (done) => {
      agent.get(getRegions).end((err: Error, res: Response) => {
        expect(res.status).toBe(OK);

        const returnRegions: any = res.body;
        expect(returnRegions).not.toBe(null);
        expect(returnRegions.Regions.length).toBeGreaterThan(1);
        done();
      });
    });
  });

  describe("GET:api/aws/getRegions/<regionId>/vpcs", () => {
    it("should return a JSON object with status OK, if request was successful", (done) => {
      agent.get(getVpcs).end((err: Error, res: Response) => {
        expect(res.status).toBe(OK);

        const returnRegions: any = res.body;
        expect(returnRegions).not.toBe(null);
        expect(returnRegions.Vpcs.length).toBeGreaterThanOrEqual(1);
        done();
      });
    });
  });

  describe("GET:api/aws/getRegions/<regionId>/vpcs/<vcp-id/subnets>", () => {
    it("should return a JSON object with status OK, if request was successful", (done) => {
      agent.get(getSubnets).end((err: Error, res: Response) => {
        expect(res.status).toBe(OK);

        const returnRegions: any = res.body;
        expect(returnRegions).not.toBe(null);
        expect(returnRegions.Subnets.length).toBeGreaterThanOrEqual(1);
        done();
      });
    });
  });

  describe("GET:api/aws/getRegions", () => {
    it("should return a JSON object with status OK, if request was successful", (done) => {
      agent.get(randomURL).end((err: Error, res: Response) => {
        expect(res.status).toBe(NOT_FOUND);

        const returnValue: any = res.body;
        expect(returnValue).not.toBe(null);
        expect(returnValue.message).toEqual(COULD_NOT_FIND_RESOURCE);
        done();
      });
    });
  });
});
