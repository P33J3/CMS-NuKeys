import { userReg } from '../../models';

export class UserRegController {
  async getAllUsers(req, res) {
    const response = await userReg.getUsers();

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
    const user = await userReg.retrieveUser(username);
    console.log('User', user[0]);
  }

  async getOneUserId(req, res) {
    const tester = await userReg.getUsers();
    console.log('testerID', tester[0].id);
    console.log('params', req.params);
    const id = req.params.userId;
    const response = await userReg.getUserById(id);

    res.status(200)
      .json({
        response,
      });
  }

  // async
  // addOneUser(req, res)
  // {
  //
  // }

  async updateOneUserById(req, res) {
    console.log('Params', req.params);
    console.log('Body', req.body);
    const id = req.params.userId;
    const updatedUser = req.body;
    const user = await userReg.updateUserById(id, updatedUser);

    res.redirect('/users');
  }

  async deleteOneRecord(req, res) {
    console.log(req.params);
    const id = req.params.userId;
    const response = await userReg.removeUserById(id);

    // res.redirect('/users');
  }
}
