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

  static async addNewDoc(title, body, author, profileId) {
    return db('documents').insert({
      title, body, author, profileId,
    });
  }

  static async getDocuments() {
    return db.select().table('documents');
  }

  static async getDocumentById(id) {
    return db('documents').where('profileId', id);
  }

  static async getDocumentByTitle(title) {
    return db('documents').where('title', title);
  }

  static async updateDocumentById(id, updateObject) {
    return db('documents')
      .where('profileId', id)
      .update(updateObject);
  }

  static async removeDocumentById(id) {
    return db('documents')
      .where('profileId', id)
      .del();
  }
}
