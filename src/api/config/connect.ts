import {Sequelize} from "sequelize-typescript"
import User from "../models/UserModel"

let postgresDdClient = new Sequelize("schooner", "postgres", "1311", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
  models: [__dirname + '/**/*.model.ts']
  
});

// postgresDdClient.addModels([User])

export default postgresDdClient