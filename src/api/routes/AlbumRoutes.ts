import { Router } from 'express';
import * as AlbumController from "../controllers/AlbumController" ;

const variableNameRoutes = Router();

variableNameRoutes.post('/', AlbumController.addAlbumController);

variableNameRoutes.get('/:albumId', AlbumController.getAlbumController);

variableNameRoutes.get('/',AlbumController.getAllAlbumController);


variableNameRoutes.patch('/:albumId', AlbumController.upDateAlbumController);


variableNameRoutes.delete('/:albumId',AlbumController.deleteAlbumController);

export default variableNameRoutes;