import { QueryOptions } from 'sequelize';
import { generateUUId } from '../../utils/generateId';
import log from '../../utils/logger';
import  ISmartInfor from "../interfaces/SmartInfor"  ;
import SmartInfor from '../models/SmartInforModel'; 

export const addSmartInfor = async (smartInforOptions: ISmartInfor): Promise<SmartInfor> => {
  let smartInfor = await SmartInfor.create({
   //@ts-ignore  
    smartInforId: generateUUId(), 
    ...smartInforOptions,
  });

  return smartInfor.toJSON();
};

export const getSmartInforById = async ( smartInforId: string): Promise<SmartInfor | null> => {
  let froundSmartInfor = await SmartInfor.findByPk(smartInforId);

  return froundSmartInfor;
};

export const updateSmartInfor = async (smartInforId: string,  updateOptions: ISmartInfor
) : Promise<number[]> => {

let {tags , ...cleanOptions} = updateOptions

log.info(cleanOptions)

  let updateRes = await SmartInfor.update(
    {
      ...updateOptions,
    },
    {
      where: { smartInforId: smartInforId },
    }
  );

  return updateRes
};



export const deleteSmartInfor = async (smartInforId:string):Promise<number>  =>{
    let deleteRes = await SmartInfor.destroy({
        where: {
            smartInforId: smartInforId
          }
    })

    return deleteRes
}


export const searchSmartInfors = async ( searchQuery:QueryOptions):Promise<null | SmartInfor[]> =>{

  let foundSmartInfors = await SmartInfor.findAll(searchQuery)

  return foundSmartInfors
}       