import { Router } from 'express';
import * as ExifController from '../controllers/ExIfController' ;

const exifRoutes = Router();

exifRoutes.post('/', ExifController.addExifController);

exifRoutes.get('/:exifId', ExifController.getExifController);

exifRoutes.get('/',ExifController.getAllExifController);


exifRoutes.patch('/:exifId', ExifController.upDateExifController);


exifRoutes.delete('/:exifId',ExifController.deleteExifController);

export default exifRoutes;