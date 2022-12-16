import Server from "./app";
import logger from "../src/utils/logger";
import * as dotenv from "dotenv";
dotenv.config();

const server = new Server().express;

server.listen(4000, () => {
  logger.info("server running !!!");
});
