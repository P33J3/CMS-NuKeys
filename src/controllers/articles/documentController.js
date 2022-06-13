import { Documents } from '../../models';

export class DocumentController {
  async getAllDocuments(req, res) {
    const response = await Documents.getDocuments();

    res.status(200)
      .json({
        response,
      });
  }

  async retrieveDocument(req, res) {
    console.log(req.body);

    const { title } = req.body;

    const document = await Documents.getDocumentByTitle(title);

    res.status(200)
      .json({
        document,
      });
  }

  async retrieveDocumentbyId(req, res) {
    const id = req.params.docId;
    const response = await Documents.getDocumentById(id);

    res.status(200)
      .json({
        response,
      });
  }

  async addNewDocument(req, res) {
    const {
      title, body, author, profileId,
    } = req.body;

    const newDocument = await Documents.addNewDoc(title, body, author, profileId);

    res.redirect('/documents');
  }

  async updateDocbyId(req, res) {
    const id = req.params.docId;
    const documentUpdates = req.body;
    const document = await Documents.updateDocumentById(id, documentUpdates);

    res.redirect('/documents');
  }

  async deleteDocument(req, res) {
    const id = req.params.docId;
    const response = await Documents.removeDocumentById(id);

    res.redirect('/documents');
  }
}
