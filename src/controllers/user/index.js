import { User } from '../../models';

export class UserController {
  async getAllUsers(req, res) {
    const response = await User.getUsers();

    res.status(200).json({
      response,
    });
  }

  async getOneUserId(req, res) {
    const tester = await User.getUsers();
    console.log('testerID', tester[0].id);
    console.log('params', req.params);
    const id = req.params.userId;
    const response = await User.getUserById(id);

    res.status(200).json({
      response,
    });
  }

  async getOneUserEmail(req, res) {
    const tester = await User.getUsers();
    console.log('testerID', tester[0].email);
    console.log('params', req.params);
    const { email } = req.params;
    const response = await User.getUserByEmail(email);

    res.status(200).json({
      response,
    });
  }

  async addOneUser(req, res) {
    try {
      const {
        firstname, lastname, age, address, username, password, email,
      } = req.body;
      // console.log(req.body);
      // console.log(username, password, email, firstname, lastname, age, address);
      const user = await User.addNewUser(username, password, email, firstname, lastname, age, address);
      res.redirect('/admin/users');
    } catch (error) {
      console.log(error);
    }
  }

  async updateOneUserById(req, res) {
    console.log('Params', req.params);
    console.log('Body', req.body);
    const id = req.params.userId;
    const updatedUser = req.body;
    const user = await User.updateUserById(id, updatedUser);

    res.redirect('/users');
  }

  async deleteOneRecord(req, res) {
    console.log(req.params);
    const id = req.params.userId;
    const response = await User.removeUserById(id);

    res.redirect('/users');
  }
}
