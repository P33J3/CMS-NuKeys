import { userReg } from '../../models';
import utils from '../../lib/utils';

export class UserRegController {
  async getAllUsers(req, res) {
    const response = await userReg.getUsers();

    res.status(200).json({
      response,
    });
  }

  async retrieveUser(req, res) {
    const { username, password } = req.body;
    const user = await userReg.retrieveUser(username);
    console.log('User', user[0]);

    if (!user) {
      return res.status(401).json({ success: false, msg: 'could not find user' });
    }

    const isValid = utils.validPassword(password, user[0].hash, user[0].salt);

    if (isValid) {
      const tokenObject = utils.issueJWT(user[0]);

      res.status(200).json({
        success: true, user: user[0], token: tokenObject.token, expiresIn: tokenObject.expires,
      });
    } else {
      res.status(401).json({ success: false, msg: 'you entered the wrong password' });
    }

    // res.status(200).json({
    //   response,
    // });
  }

  async getOneUserId(req, res) {
    const tester = await userReg.getUsers();
    console.log('testerID', tester[0].id);
    console.log('params', req.params);
    const id = req.params.userId;
    const response = await userReg.getUserById(id);

    res.status(200).json({
      response,
    });
  }

  async addOneUser(req, res) {
    const { username, password } = req.body;
    const saltHash = utils.genPassword(password);

    const { salt } = saltHash;
    const { hash } = saltHash;

    // const { address } = req.body;
    const userInfo = await userReg.addNewUser(username, password, hash, salt);

    const user = await userReg.retrieveUser(username);

    const tokenObject = utils.issueJWT(user[0]);

    // eslint-disable-next-line max-len
    res.status(200).json({
      success: true, user: user[0], token: tokenObject.token, expiresIn: tokenObject.expires,
    });
    // res.status(401).json({ success: false, msg: 'action failed' });

    // res.redirect('/reg/users');
  }

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
