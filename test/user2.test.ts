import { describe, expect, test, it, jest } from "@jest/globals";
import supertest from "supertest";
import * as UserService from "../src/api/services/user.service";
import Server from "../src/app"
const app = new Server().express

/**
 * notes
 * 1.just list all the things that you want to
 *
 */

const userInput = {
  email: "test@email.com",
  displayName: "King Pharoah",
  password: "chicken",
};

const userPayload = {
  userId: "1",
  email: "test@email.com",
  displayName: "King Pharoah",
  password: "chicken",
};
describe("user", () => {
  //user registration
  describe("user registration", () => {
    describe("given the username and password are valid", () => {
      it("should return the user payload", async () => {
        const createUserServiceMock = jest
          .spyOn(UserService, "createUserService")
          //@ts-ignore
          .mockReturnValueOnce(userPayload);

          const {statusCode , body} = await supertest(app).post(`/api/v1/user/`).send(userInput)

          expect(statusCode).toBe(200);
        //   expect(body).toEqual(userPayload);
          expect(createUserServiceMock).toHaveBeenCalledWith(userInput)


      });
    });
 
    describe("given the password do not match", () => {
      it("should return 400", () => {});
    });

    describe("given the user servie throws", () => {
      it("should return a 500", async () => {
        const createUserServiceMock = jest
          .spyOn(UserService, "createUserService")
          //@ts-ignore
          .mockRejectedValue("I cant move ....!!!")
          const {statusCode } = await supertest(app).post(`/api/v1/user/`).send(userInput)

          expect(statusCode).toBe(500)
          expect(createUserServiceMock).toHaveBeenCalled()
      });
    });
  });
});
