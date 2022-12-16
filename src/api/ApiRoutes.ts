/**
 * This file exposes the api level routes
 */

import { Request, Response } from "express"


import {Router } from "express"
import userRoutes from "./routes/UserRoutes"


const apiRoutes = Router()


apiRoutes.use("/user",userRoutes)

apiRoutes.get("/",async (req:Request, res:Response) =>{

    return res.json({
        success:true,
        msg:"API Backend Up running !!!"
    })

} )

export default apiRoutes