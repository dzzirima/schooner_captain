/**
 * This file exposes the api level routes
 */

import { Request, Response } from "express"


import {Router } from "express"


const apiRoutes = Router()

apiRoutes.get("/",async (req:Request, res:Response) =>{

    return res.json({
        success:true,
        msg:"API Backend Up running !!!"
    })

} )

export default apiRoutes