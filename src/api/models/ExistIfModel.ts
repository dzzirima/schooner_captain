import { Table, Model, Column } from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
import IExistIf from "../interfaces/ExistIfInterface";

@Table({
  timestamps: true,
  tableName: "exif",
})
class Exif extends Model implements IExistIf {
  @Column({ primaryKey: true, type: DataType.STRING })
  exifId!: string;

  @Column({ type: DataType.STRING })
  assetId!: string;

  @Column({ type: DataType.STRING })
  description!: string;

  @Column({ type: DataType.INTEGER })
  fileSizeInBytes!: number | null;

  @Column({ type: DataType.INTEGER })
  imageHeight!: number | null;

  @Column({ type: DataType.INTEGER })
  imageWidth!: number | null;

  @Column({ type: DataType.STRING })
  orientation!: string | null;

  @Column({ type: DataType.DATE })
  dateTimeOriginal!: Date | null;

  @Column({ type: DataType.INTEGER })
  longitude!: number | null;

  @Column({ type: DataType.INTEGER })
  latitude!: number | null;

  @Column({ type: DataType.STRING })
  city!: string | null;

  @Column({ type: DataType.STRING })
  state!: string | null;
  
  @Column({ type: DataType.STRING })
  country!: string | null;

  // @OneToMany(() => UserAlbumEntity, (userAlbums) => userAlbums.albumInfo)
  // sharedUsers?: UserAlbumEntity[];

  // @OneToMany(() => AssetAlbumEntity, (assetAlbumEntity) => assetAlbumEntity.albumInfo)
  // assets?: AssetAlbumEntity[];
}

export default Exif;
