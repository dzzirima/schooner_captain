import { Table, Model , AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty} from "sequelize-typescript";
import IUser from "../interfaces/user.interface";


@Table({
    timestamps:true,
    tableName: "user",
})
class User extends Model implements IUser{

    @Column
    @AutoIncrement
    @PrimaryKey
    @Column
    userId?: number;

    @Column
    @AllowNull(false)
    displayName!: string;

    @Column
    @NotEmpty
    @AllowNull(false)
    email!: string;

    @NotEmpty
    @AllowNull(false)
    @Column
    password!: string;
}