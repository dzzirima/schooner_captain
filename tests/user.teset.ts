import {describe, expect, test,it} from '@jest/globals';
import supertest from 'supertest';
import Server from "../src/app"

const app = new Server().express
describe("User Tests", () =>{

    describe("given  that the user does not exist ", () =>{
        it("should return 404", async  () =>{
          const userId = 234444

          await  supertest(app).get(`/api/v1/user/${userId}`).expect(404)
        })

        
    })

    describe("given that the user exist", () =>{
        it("should retun 200 and have success property on the body", async() =>{
            const userId = 1
           let productFound = await supertest(app).get(`/api/v1/user/${userId}`).expect(200)

           expect(productFound.body).toHaveProperty("success")
        })
    })
})


/**
 * some nuggeets 
 * 
 * when  dealng witjh dynamic data 
 * usr : {
 *      userId:expect.any(String)
 * 
 * }
 * 
 * 1.check skip
 * 2. check .only
 * 
 * vid :31:13 Mocking now .... 
 */


   