import { async } from "regenerator-runtime";
import { db, dbReg } from '../../lib/knex';


export class userReg {
  static async retrieveUser(username) {
    return dbReg('regusers').where('username', username);
      // username: this.username,
      // password: this.password,

  }

  static async addNewUser(username, password, hash, salt) {
    return dbReg('regusers').insert({
      username, password, hash, salt,
    }).returning('id')
      .then(([user]) => db('users').insert(({
        id: user.id,
        firstname: 'FirstName',
        lastname: 'LastName',
      })));
  }

  static async getUsers() {
    return dbReg.select().table('regusers');
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
