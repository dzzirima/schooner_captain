import { QueryOptions } from 'sequelize';
import { generateUUId } from '../../utils/generateId';
import IExif from '../interfaces/ExistIfInterface';
import Exif from '../models/ExistIfModel'; 

export const addExif = async (exifOptions: IExif): Promise<Exif> => {
  let exif = await Exif.create({
   //@ts-ignore  
    exifId: generateUUId(), 
    ...exifOptions,
  });

  return exif.toJSON();
};

export const getExifById = async ( exifId: string): Promise<Exif | null> => {
  let froundExif = await Exif.findByPk(exifId);

  return froundExif;
};

export const updateExif = async (exifId: string,  updateOptions: IExif
) : Promise<number[]> => {
  let updateRes = await Exif.update(
    {
      ...updateOptions,
    },
    {
      where: { exifId: exifId },
    }
  );

  return updateRes
};



export const deleteExif = async (exifId:string):Promise<number>  =>{
    let deleteRes = await Exif.destroy({
        where: {
            exifId: exifId
          }
    })

    return deleteRes
}


export const searchExifs = async ( searchQuery:QueryOptions):Promise<null | Exif[]> =>{

  let foundExifs = await Exif.findAll(searchQuery)

  return foundExifs
}   