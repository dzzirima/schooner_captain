import { Request, Response } from 'express';
import log from '../../utils/logger';
import missingParams from '../../utils/missingParams';


import * as AssetService from '../services/AssetService'

export const addAssetController = async (req: Request, res: Response) => {
  


    let requiredParams = ['ownerId' , 'type' ,'webPath']
    let missing = missingParams(requiredParams , req.body)
    
    if(missing.length > 0){
     return  res.status(400).json({
          success:false,
           msg:'missing params from your request',
           'missingParams':missing
      })
    }

  try {
    let newAsset = await AssetService.addAsset({...req.body});

    return res.json({
      success: true,
      asset: newAsset,
    });
  } catch (error) {
    log.error(error)
    return res.status(500).json({
      success: false,
      msg: `error while creating an asset`,
    });
  }
};

//get asset by id
export const getAssetController = async (req: Request, res: Response) => {
  const { assetId } = req.params;
  try {
    let assetFound = await AssetService.getAssetById(assetId);

    if (assetFound == null) {
      return res.status(400).json({
        success: false,
        msg: 'No entry was found please provide a valid assetId!!',
      });
    }

    return res.json({
      success: true,
      asset: assetFound,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `error`,
    });
  }
};      

export const getAllAssetController = async (req: Request, res: Response) => {

    let query :any  = {attributes: { exclude: ['password'] }}

  try {
    let assetsFound = await AssetService.searchAssets(query);

    return res.json({
      success: true,
      assets: assetsFound,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `error`,
    });
  }
};
export const upDateAssetController = async (req: Request, res: Response) => {

    const {assetId} = req.params
  try {
    let assetUpdateResults = await AssetService.updateAsset(assetId,{
      ...req.body,
    });



    if (assetUpdateResults[0] !== 1) {
      return res.status(400).json({
        success: false,
        msg: 'No entry was updated please provide a valid assetId !!',
      });
    }

    return res.json({
      success: true,
      msg: 'asset was successfully updated ',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `error`,
    });
  }
};

export const deleteAssetController = async (req: Request, res: Response) => {
  const { assetId } = req.params;
  try {
    let assetDeleteResults = await AssetService.deleteAsset(assetId);

    if (assetDeleteResults !== 1) {
      return res.status(400).json({
        success: false,
        msg: 'No entry was deleted please provide a valid assetId !!',
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
