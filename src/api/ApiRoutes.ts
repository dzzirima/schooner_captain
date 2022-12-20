/**
 * This file exposes the api level routes
 */

import { Request, Response } from "express"


import {Router } from "express"
import userRoutes from "./routes/UserRoutes"
import albumRoutes from './routes/AlbumRoutes'
import assetRoutes from "./routes/AssetRoutes"


const apiRoutes = Router()


apiRoutes.use("/user",userRoutes)
apiRoutes.use("/album" ,albumRoutes)
apiRoutes.use("/asset" ,assetRoutes)

apiRoutes.get("/",async (req:Request, res:Response) =>{

    return res.json({
        success:true,
        msg:"API Backend Up running !!!"
    })
} )

export default apiRoutes