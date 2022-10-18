import express from "express"
import morgan from "morgan"
import cors from "cors"
import postgresDdClient from "./utils/connect";
import logger from "../src/utils/logger"
import apiRoutes from "./api/api.routes";

class App {
    public express: express.Application;

   

    constructor() {
        this.express = express();
        this.setMiddleware();
        this.setRoutes();
        this.connectToDB();
        this.catchError();
      }
    
      private setMiddleware(): void {
        this.express.use(cors());
        this.express.use(express.json());
        this.express.use(morgan("dev"));
      }
    
      private setRoutes(): void {
        this.express.use("/api/v1",apiRoutes );
      }
    
      private async connectToDB(): Promise<void> {
        try {
    
          await postgresDdClient.authenticate()
          await postgresDdClient.sync({ alter: true });
          logger.info("database connected successfully !!!");
            
        } catch (error) {
          logger.info(error)
            
        }
      
      }
    
      private catchError(): void {}


}


export default App