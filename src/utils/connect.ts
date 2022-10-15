import { Sequelize } from "sequelize";

let postgresDdClient = new Sequelize("schooner", "postgres", "1311", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

export default postgresDdClient