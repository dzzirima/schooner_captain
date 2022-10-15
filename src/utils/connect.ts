import {Sequelize} from "sequelize-typescript"
import User from "../api/models/User.model"

let postgresDdClient = new Sequelize("schooner", "postgres", "1311", {
  host: "localhost",
  dialect: "postgres",
  logging: true,
  models: [__dirname + '/**/*.model.ts']
  
});

postgresDdClient.addModels([User])

export default postgresDdClient