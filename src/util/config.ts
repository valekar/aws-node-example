/**
 * Configuration file
 */
import dotenv from "dotenv";
import { COULD_NOT_LOAD_ENVIRONMENT } from "./constants";

//load environment
const loaded = dotenv.config({ path: "./env/development.env" });
if (loaded.error) {
  console.log(COULD_NOT_LOAD_ENVIRONMENT);
}

//Load AWS configurations
export const config = {
  ec2: { apiVersion: "2016-11-15", defaultRegion: "eu-north-1" },
};
