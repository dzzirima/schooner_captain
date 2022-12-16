import express, { NextFunction } from "express"
import morgan from "morgan"
import cors from "cors"
import postgresDdClient from "./api/config/connect";
import logger from "../src/utils/logger"
import apiRoutes from "./api/ApiRoutes";

class App {
    public express: express.Application;

   

    constructor() {
        this.express = express();
        this.setMiddleware();
        this.setRoutes();
        this.connectToDB();
        
      }
    
      private setMiddleware(): void {
        this.express.use(cors());
        this.express.use(express.json());
        this.express.use(morgan("dev"));
        // this.express.use(this.errorHandler)
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
    
      private errorHandler (err: Error ,req:Request , res: Response , next: NextFunction): void {

        /** 
         * this middleware catches all the codebase errors
        */
        logger.error(err)

      }


}


export default App