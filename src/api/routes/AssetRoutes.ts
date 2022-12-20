import { Router } from 'express';
import * as AssetController from '../controllers/AssetController' ;

const assetRoutes = Router();

assetRoutes.post('/', AssetController.addAssetController);

assetRoutes.get('/:assetId', AssetController.getAssetController);

assetRoutes.get('/',AssetController.getAllAssetController);


assetRoutes.patch('/:assetId', AssetController.upDateAssetController);


assetRoutes.delete('/:assetId',AssetController.deleteAssetController);

export default assetRoutes;