import {
  Table,
  Model,
  AutoIncrement,
  PrimaryKey,
  Column,
  AllowNull,
  NotEmpty,
  Default,
  Unique,
} from "sequelize-typescript";
import IUser from "../interfaces/user.interface";
import { DataType } from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "user",
})
class User extends Model implements IUser {


  @Column({ primaryKey: true, type: DataType.STRING })
  userId?: string;

  @NotEmpty
  @Column({ type: DataType.STRING })
  displayName!: string;

  @Column({ type: DataType.STRING })
  lastName!: string;
  
  @Column({ type: DataType.STRING })
  firstName!: string;

  @Unique
  @NotEmpty
  @Column({ type: DataType.STRING })
  email!: string;

  @Column({ type: DataType.STRING })
  password!: string;
}

export default User;
