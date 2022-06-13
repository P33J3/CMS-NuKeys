import bcrypt from 'bcrypt';

import { User } from '../../models';


export class UserRegController {
  async getAllUsers(req, res) {
    const response = await User.getLoginUsers();

    res.status(200)
      .json({
        response,
      });
  }

  async retrieveUser(req, res) {
    const {
      username,
      password,
    } = req.body;
    const user = await User.retrieveLoginUser(username);
    console.log('User', user[0]);

    res.status(200)
      .json({
        user,
      });
  }

  async getOneUserId(req, res) {
    const tester = await User.getLoginUsers();
    console.log('testerID', tester[0].id);
    console.log('params', req.params);
    const id = req.params.userId;
    const response = await User.getLoginUserById(id);

    res.status(200)
      .json({
        response,
      });
  }

  async addOneUser(req, res) {
    try {
      const {
        username,
        password,
      } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const userInfo = await User.addNewLoginUser(username, hashedPassword);

      const user = await User.retrieveLoginUser(username);

      res.status(200)
        .json({
          success: true,
          user: user[0],
        });
    } catch {
      res.redirect('/');
    }
  }

  async updateOneUserById(req, res) {
    console.log('Params', req.params);
    console.log('Body', req.body);
    const id = req.params.userId;
    const updatedUser = req.body;
    const user = await User.updateLoginUserById(id, updatedUser);

    res.redirect('/users');
  }

  async deleteOneRecord(req, res) {
    console.log(req.params);
    const id = req.params.userId;
    const response = await User.removeLoginUserById(id);

    // res.redirect('/users');
  }
}
