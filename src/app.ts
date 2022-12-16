import express, { NextFunction } from "express"
import morgan from "morgan"
import cors from "cors"
import postgresDdClient from "./api/config/connect";
import logger from "../src/utils/logger"
import apiRoutes from "./api/ApiRoutes";
import * as  errorHandler from "./utils/responseHandlers/errorHandler" 

class App {
    public express: express.Application;

   

    constructor() {
        this.express = express();
        this.setMiddleware();
        this.setRoutes();
        this.connectToDB();
        this.catchError()
        
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
          await postgresDdClient.sync({ force: true });
          logger.info("database connected successfully !!!");
            
        } catch (error) {
          logger.error(error)
            
        }
      
      }
    
      private catchError(): void {
        this.express.use(errorHandler.notFound);
        this.express.use(errorHandler.internalServerError);
        this.express.use(errorHandler.badRequest);
      }
}


export default App