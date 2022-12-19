import { Table, Model, Column } from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
import IAlbulm from "../interfaces/AlbumInterface";


@Table({
  timestamps: true,
  tableName: "album",
})
class Album  extends Model implements IAlbulm {

  @Column({ primaryKey: true, type: DataType.STRING })
  albumId!: string;

  @Column({ type: DataType.STRING })
  ownerId!: string;

  @Column({ type: DataType.STRING })
  albumName!: string;

  
  // @OneToMany(() => UserAlbumEntity, (userAlbums) => userAlbums.albumInfo)
  // sharedUsers?: UserAlbumEntity[];

  // @OneToMany(() => AssetAlbumEntity, (assetAlbumEntity) => assetAlbumEntity.albumInfo)
  // assets?: AssetAlbumEntity[];
}

 


export default Album;


