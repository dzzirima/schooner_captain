import {
  Table,
  Model,
  AutoIncrement,
  PrimaryKey,
  Column,
  AllowNull,
  NotEmpty,
  Default,
} from "sequelize-typescript";
import IUser from "../interfaces/user.interface";
import { DataType } from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "user",
})
class User extends Model implements IUser {

@AutoIncrement
  @Column({ primaryKey: true, type: DataType.INTEGER })
  userId?: number;

  @NotEmpty
  @Column({ type: DataType.STRING })
  displayName!: string;

  @NotEmpty
  @Column({ type: DataType.STRING })
  email!: string;

  @Column({ type: DataType.STRING })
  password!: string;
}

export default User;
