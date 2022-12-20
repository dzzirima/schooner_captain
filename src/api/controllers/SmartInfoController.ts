import { Request, Response } from 'express';
import missingParams from '../../utils/missingParams';


import * as SmartInforService from '../services/SmartInforService'

export const addSmartInforController = async (req: Request, res: Response) => {
  

  try {
    let requiredParams = ['displayName' , 'tags']
    let missing = missingParams(requiredParams , req.body)
    
    if(missing.length > 0){
     return  res.status(400).json({
          success:false,
           msg:'missing params from your request',
           'missingParams':missing
      })
    }


    let newSmartInfor = await SmartInforService.addSmartInfor({...req.body});

    return res.json({
      success: true,
      smartInfor: newSmartInfor,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `error`,
    });
  }
};

//get smartInfor by id
export const getSmartInforController = async (req: Request, res: Response) => {
  const { smartInforId } = req.params;
  try {
    let smartInforFound = await SmartInforService.getSmartInforById(smartInforId);

    if (smartInforFound == null) {
      return res.status(400).json({
        success: false,
        msg: 'No entry was found please provide a valid smartInforId!!',
      });
    }

    return res.json({
      success: true,
      smartInfor: smartInforFound,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `error`,
    });
  }
};

export const getAllSmartInforController = async (req: Request, res: Response) => {

    let query :any  = {attributes: { exclude: ['password'] }}

  try {
    let smartInforsFound = await SmartInforService.searchSmartInfors(query);

    return res.json({
      success: true,
      smartInfors: smartInforsFound,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `error`,
    });
  }
};
export const upDateSmartInforController = async (req: Request, res: Response) => {

    const {smartInforId} = req.params
  try {
    let smartInforUpdateResults = await SmartInforService.updateSmartInfor(smartInforId,{
      ...req.body,
    });



    if (smartInforUpdateResults[0] !== 1) {
      return res.status(400).json({
        success: false,
        msg: 'No entry was updated please provide a valid smartInforId !!',
      });
    }

    return res.json({
      success: true,
      msg: 'smartInfor was successfully updated ',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `error`,
    });
  }
};

export const deleteSmartInforController = async (req: Request, res: Response) => {
  const { smartInforId } = req.params;
  try {
    let smartInforDeleteResults = await SmartInforService.deleteSmartInfor(smartInforId);

    if (smartInforDeleteResults !== 1) {
      return res.status(400).json({
        success: false,
        msg: 'No entry was deleted please provide a valid smartInforId !!',
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
