import { QueryOptions } from 'sequelize';
import { generateUUId } from '../../utils/generateId';
import IAsset from '../interfaces/AssetInterface';
import Asset from '../models/AssetModel'; 

export const addAsset = async (assetOptions: IAsset): Promise<Asset> => {

    let id = await generateUUId()

    console.log(id)
  let asset = await Asset.create({
   //@ts-ignore  
    assetId: generateUUId(),
    ...assetOptions,
  });

  return asset.toJSON();
};

export const getAssetById = async ( assetId: string): Promise<Asset | null> => {
  let froundAsset = await Asset.findByPk(assetId);

  return froundAsset;
};

export const updateAsset = async (assetId: string,  updateOptions: IAsset
) : Promise<number[]> => {
  let updateRes = await Asset.update(
    {
      ...updateOptions,
    },
    {
      where: { assetId: assetId },
    }
  );

  return updateRes
};



export const deleteAsset = async (assetId:string):Promise<number>  =>{
    let deleteRes = await Asset.destroy({
        where: {
            assetId: assetId
          }
    })

    return deleteRes
}


export const searchAssets = async ( searchQuery:QueryOptions):Promise<null | Asset[]> =>{

  let foundAssets = await Asset.findAll(searchQuery)

  return foundAssets
}       