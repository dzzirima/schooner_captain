import { Request, Response } from 'express';
import missingParams from '../../utils/missingParams';


import * as ExifService from '../services/ExifService'

export const addExifController = async (req: Request, res: Response) => {



  let requiredParams = ['assetId' , 'description']
  let missing = missingParams(requiredParams , req.body)
  
  if(missing.length > 0){
   return  res.status(400).json({
        success:false,
         msg:'missing params from your request',
         'missingParams':missing
    })
  }

  try {
    let newExif = await ExifService.addExif({...req.body});

    return res.json({
      success: true,
      exif: newExif,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `error`,
    });
  }
};

//get exif by id
export const getExifController = async (req: Request, res: Response) => {
  const { exifId } = req.params;
  try {
    let exifFound = await ExifService.getExifById(exifId);

    if (exifFound == null) {
      return res.status(400).json({
        success: false,
        msg: 'No entry was found please provide a valid exifId!!',
      });
    }

    return res.json({
      success: true,
      exif: exifFound,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `error`,
    });
  }
};

export const getAllExifController = async (req: Request, res: Response) => {

    let query :any  = {attributes: { exclude: ['password'] }}

  try {
    let exifsFound = await ExifService.searchExifs(query);

    return res.json({
      success: true,
      exifs: exifsFound,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `error`,
    });
  }
};
export const upDateExifController = async (req: Request, res: Response) => {

    const {exifId} = req.params
  try {
    let exifUpdateResults = await ExifService.updateExif(exifId,{
      ...req.body,
    });



    if (exifUpdateResults[0] !== 1) {
      return res.status(400).json({
        success: false,
        msg: 'No entry was updated please provide a valid exifId !!',
      });
    }

    return res.json({
      success: true,
      msg: 'exif was successfully updated ',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `error`,
    });
  }
};

export const deleteExifController = async (req: Request, res: Response) => {
  const { exifId } = req.params;
  try {
    let exifDeleteResults = await ExifService.deleteExif(exifId);

    if (exifDeleteResults !== 1) {
      return res.status(400).json({
        success: false,
        msg: 'No entry was deleted please provide a valid exifId !!',
      });
    }

    return res.json({
      success: true,
      msg: 'Entry  was successfully deleted  ',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `error`,
    });
  }
};
