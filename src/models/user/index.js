import { async } from "regenerator-runtime";
import { db, dbReg } from '../../lib/knex';


export class User {
  static retrieveUser() {
    return {
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      address: this.address,
    };
  }

  static async addNewUser(firstname, lastname, age, address) {
    return db('users').insert({
      firstname, lastname, age, address,
    });
  }

  static async getUsers() {
    return db.select().table('users');
  }

  static async getUserById(id) {
    return dbReg('users').where('id', id);
  }

  static async updateUserById(id, updateObject) {
    return db('users')
      .where('id', id)
      .update(updateObject);
  }

  static async removeUserById(id) {
    return db('users')
      .where('id', id)
      .del();
  }
}
