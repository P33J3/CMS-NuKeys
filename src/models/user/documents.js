import { async } from 'regenerator-runtime';
import { db } from '../../lib/knex';

export class Documents {
  // static retrieveUser() {
  //   return {
  //     firstname: this.firstname,
  //     lastname: this.lastname,
  //     age: this.age,
  //     address: this.address,
  //   };
  // }

  static async addNewDoc(title, body, author, authorId) {
    return db('documents').insert({
      title, body, author, authorId,
    });
  }

  static async getDocuments() {
    return db.select().table('documents');
  }

  static async getDocumentById(id) {
    return db('documents').where('id', id);
  }

  static async getDocumentByTitle(title) {
    return db('documents').where('title', title);
  }

  static async updateDocumentById(id, updateObject) {
    return db('documents')
      .where('id', id)
      .update(updateObject);
  }

  static async removeDocumentById(id) {
    return db('documents')
      .where('id', id)
      .del();
  }
}
