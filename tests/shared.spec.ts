/**
 * Spec file for test util functions in shared.ts file
 */
import buildEC2Object, { checkNull } from "../src/util/shared";
import { config } from "../src/util/config";

describe("Test shared file functions ", () => {
  it("should  test checkNull function", () => {
    expect(checkNull("str")).toBe(false);
    expect(checkNull("")).toBe(true);
  });

  it("should test default buildEC2Object", () => {
    const ec2Object = buildEC2Object();
    expect(ec2Object).not.toBe(null);
    expect(ec2Object.config.apiVersion).toBe(config.ec2.apiVersion);
    expect(ec2Object.config.region).toBe(config.ec2.defaultRegion);
  });

  it("should test custom region buildEC2Object", () => {
    const ec2Object = buildEC2Object("hello");
    expect(ec2Object.config.region).toBe("hello");
  });
});
