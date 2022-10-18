import Server from "./app"
import logger from "../src/utils/logger"

const server  = new Server().express

server.listen(4000,() =>{
    logger.info("server running !!!")
})