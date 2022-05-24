import { async } from 'regenerator-runtime';
import { db } from '../../lib/index';

export class userReg {
  static async retrieveUser(username) {
    return db('regusers').where('username', username);
    // username: this.username,
    // password: this.password,
  }

  static async addNewUser(username, password) {
    return db('regusers').insert({
      username, password,
    }).returning('id')
      .then(([user]) => db('users').insert(({
        id: user.id,
        firstname: 'FirstName',
        lastname: 'LastName',
      })));
  }

  static async getUsers() {
    return db.select().table('regusers');
  }

  // static async getUserById(id) {
  //   return dbReg('regusers').where('id', id);
  // }
  //
  // static async updateUserById(id, updateObject) {
  //   return dbReg('regusers')
  //     .where('id', id)
  //     .update(updateObject);
  // }
  //
  // static async removeUserById(id) {
  //   return dbReg('regusers')
  //     .where('id', id)
  //     .del();
  // }
}
