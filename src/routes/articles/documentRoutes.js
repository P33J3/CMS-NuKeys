import { Router } from 'express';
import { DocumentController } from '../../controllers';

export const documentRouter = Router();
const documentController = new DocumentController();

documentRouter.route('/documents').get(documentController.getAllDocuments);

documentRouter.route('/documents/retrieve').get(documentController.retrieveDocument);

documentRouter.route('/documents/add').post(documentController.addNewDocument);

documentRouter.route('/documents/:docId').get(documentController.retrieveDocumentbyId);

documentRouter.route('/documents/update/:docId').get(documentController.updateDocbyId);

documentRouter.route('/documents/delete/:docId').delete(documentController.deleteDocument);
