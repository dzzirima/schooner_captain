import { Router } from 'express';
import * as SmartInforController from '../controllers/SmartInfoController' ;

const smartInforRoutes = Router();

smartInforRoutes.post('/', SmartInforController.addSmartInforController);

smartInforRoutes.get('/:smartInforId', SmartInforController.getSmartInforController);

smartInforRoutes.get('/',SmartInforController.getAllSmartInforController);


smartInforRoutes.patch('/:smartInforId', SmartInforController.upDateSmartInforController);


smartInforRoutes.delete('/:smartInforId',SmartInforController.deleteSmartInforController);

export default smartInforRoutes;