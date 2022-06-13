import { async } from 'regenerator-runtime';
import { db } from '../../lib/knex';

export class User {
  static retrieveUser() {
    return {
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      address: this.address,
    };
  }

  static async addNewUser(username, password, email, firstname, lastname, age, address) {
    return db('users').insert({
      username, password, email, firstname, lastname, age, address,
    })
      .returning('*')
      .then(([user]) => db('regusers').insert({
        // id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        password: user.password,
        email: user.email,
        age: user.age,
        address: user.address,
        profileId: user.id,
      }));
  }

  static async getUsers() {
    return db.select().table('users');
  }

  static async getUserById(id) {
    return db('users').where('id', id);
  }

  static async getUserByEmail(email) {
    return db('users').where('email', email);
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

  static async retrieveLoginUser(username) {
    return db('regusers').where('username', username);
    // username: this.username,
    // password: this.password,
  }

  static async addNewLoginUser(username, password, email, firstname, lastname, age, address) {
    return db('regusers').insert({
      username, password, email, firstname, lastname, age, address,
    });
  }

  static async getLoginUsers() {
    return db.select().table('regusers');
  }

  static async getLoginUserById(id) {
    return db('regusers').where('id', id);
  }

  static async updateLoginUserById(id, updateObject) {
    return db('regusers')
      .where('id', id)
      .update(updateObject);
  }

  static async removeLoginUserById(id) {
    return db('regusers')
      .where('id', id)
      .del();
  }
}
