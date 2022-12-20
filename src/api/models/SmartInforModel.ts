import { Table, Model, Column } from "sequelize-typescript";
import { DataType } from "sequelize-typescript";

import ISmartInfo from "../interfaces/SmartInfor";


@Table({
  timestamps: true,
  tableName: "smartinfor",
})
class SmartInfor  extends Model implements ISmartInfo {

  @Column({ primaryKey: true, type: DataType.STRING })
  smartInforId!: string | number | null;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  tags!: string[] | null;

  @Column({ type: DataType.STRING })
  displayName!: string | null;


  // @OneToOne(() => AssetEntity, { onDelete: 'CASCADE', nullable: true })

}

 


export default SmartInfor;


