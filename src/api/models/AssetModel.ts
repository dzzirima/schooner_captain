import { Table, Model, Column } from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
import IAsset from "../interfaces/AssetInterface";

@Table({
  timestamps: true,
  tableName: "asset",
})
class Asset extends Model implements IAsset {
  @Column({ primaryKey: true, type: DataType.STRING })
  assetId!: string;

  @Column({ type: DataType.STRING })
  deviceAssetId?: string;

  @Column({ type: DataType.STRING })
  ownerId!: string;

  @Column({ type: DataType.STRING })
  deviceId?: string;

  @Column({ type: DataType.STRING })
  type!: AssetType;

  @Column({ type: DataType.STRING })
  originalPath!: string;

  @Column({ type: DataType.STRING })
  webPath!: string ;

  @Column({ type: DataType.BOOLEAN })
  isFavorite!: boolean ;

  @Column({ type: DataType.STRING })
  duration!: string ;

  //   @OneToOne(() => ExifEntity, (exifEntity) => exifEntity.asset)
  //   exifInfo?: ExifEntity;

  //   @OneToOne(() => SmartInfoEntity, (smartInfoEntity) => smartInfoEntity.asset)
  //   smartInfo?: SmartInfoEntity;
}

export default Asset;

export enum AssetType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO",
  OTHER = "OTHER",
}
