import { QueryOptions } from "sequelize";
import { generateUUId } from "../../utils/generateId";
import IAlbum from "../interfaces/AlbumInterface";
import Album from "../models/AlbumModel";


export const addAlbum = async (albumOptions: IAlbum): Promise<Album> => {
  let album = await Album.create({
    //@ts-ignore
    albumId: await  generateUUId(),
    ...albumOptions,
  });

  return album.toJSON();
};

export const getAlbumById = async (albumId: string): Promise<Album | null> => {
  let froundAlbum = await Album.findByPk(albumId);

  return froundAlbum;
};

export const updateAlbum = async (
  albumId: string,
  updateOptions: IAlbum
): Promise<number[]> => {
  let updateRes = await Album.update(
    {
      ...updateOptions,
    },
    {
      where: { albumId: albumId },
    }
  );

  return updateRes;
};

export const deleteAlbum = async (albumId: string): Promise<number> => {
  let deleteRes = await Album.destroy({
    where: {
      albumId: albumId,
    },
  });

  return deleteRes;
};

export const searchAlbums = async (
  searchQuery: QueryOptions
): Promise<null | Album[]> => {
  let foundAlbums = await Album.findAll(searchQuery);

  return foundAlbums;
};
