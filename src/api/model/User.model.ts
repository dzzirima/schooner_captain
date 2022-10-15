import { Table, Model } from "sequelize-typescript";
interface UserAttributes{
    userId:number,
    displayName:string,
    email:string,
    password:string
}