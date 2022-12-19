import { Sequelize } from "sequelize-typescript";
import logger from "../../utils/logger";

let loging = function (str: string | any) {
  logger.info(str);
};

let postgresDdClient = new Sequelize("schooner", "postgres", "1311", {
  host: "localhost",
  dialect: "postgres",
  // logging: loging,
  logging:false,
  // models: [__dirname + '../models/*.ts']
  models: [__dirname + "/../models/*.*"],
});

// postgresDdClient.addModels([User])

export default postgresDdClient;
