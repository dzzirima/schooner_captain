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

  @Column({ type: DataType.NUMBER })
  fileSizeInBytes!: number | null;

  @Column({ type: DataType.NUMBER })
  imageHeight!: number | null;

  @Column({ type: DataType.NUMBER })
  imageWidth!: number | null;

  @Column({ type: DataType.STRING })
  orientation!: string | null;

  @Column({ type: DataType.DATE })
  dateTimeOriginal!: Date | null;

  @Column({ type: DataType.NUMBER })
  longitude!: number | null;

  @Column({ type: DataType.NUMBER })
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
