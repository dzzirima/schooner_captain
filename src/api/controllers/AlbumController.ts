import { Request, Response } from "express";
import missingParams from "../../utils/missingParams";
import log from "../../utils/logger";

import * as AlbumService from "../services/AlbumService";

export const addAlbumController = async (req: Request, res: Response) => {
  const {} = req.body;

  let requiredParams = ["albumName", "ownerId"];
  let missing = missingParams(requiredParams, req.body);

  if (missing.length > 0) {
    return res.status(400).json({
      success: false,
      msg: "missing params from your request",
      missingParams: missing,
    });
  }

  try {
    let newAlbum = await AlbumService.addAlbum({ ...req.body });

    return res.json({
      success: true,
      album: newAlbum,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `error`,
    });
  }
};

//get album by id
export const getAlbumController = async (req: Request, res: Response) => {
  const { albumId } = req.params;
  try {
    let albumFound = await AlbumService.getAlbumById(albumId);

    if (albumFound == null) {
      return res.status(400).json({
        success: false,
        msg: "No entry was found please provide a valid albumId!!",
      });
    }

    return res.json({
      success: true,
      album: albumFound,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `error`,
    });
  }
};

export const getAllAlbumController = async (req: Request, res: Response) => {
  let query: any = { attributes: { exclude: ["password"] } };

  try {
    let albumsFound = await AlbumService.searchAlbums(query);

    return res.json({
      success: true,
      msg:"albums found ..",
      albums: albumsFound,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `error`,
    });
  }
};
export const upDateAlbumController = async (req: Request, res: Response) => {
  const { albumId } = req.params;


  try {
    let albumUpdateResults = await AlbumService.updateAlbum(albumId, {
      ...req.body,
    });

    if (albumUpdateResults[0] !== 1) {
      return res.status(400).json({
        success: false,
        msg: "No entry was updated please provide a valid albumId !!",
      });
    }

    return res.json({
      success: true,
      msg: "album was successfully updated ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `error`,
    });
  }
};

export const deleteAlbumController = async (req: Request, res: Response) => {
  const { albumId } = req.params;
  try {
    let albumDeleteResults = await AlbumService.deleteAlbum(albumId);

    if (albumDeleteResults !== 1) {
      return res.status(400).json({
        success: false,
        msg: "No entry was deleted please provide a valid albumId !!",
      });
    }

    return res.json({
      success: true,
      msg: "Entry  was successfully deleted  ",
    });
  } catch (error) {
    log.error(error)
    return res.status(500).json({
      success: false,
      msg: `error`,
    });
  }
};
