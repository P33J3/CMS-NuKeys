import User from "../../models/user";

export default class UserController {
  async getAllUsers(req, res) {
    const response = await User.getUsers();

    res.status(200).json({
      response,
    });
  }

  async getOneUserId(req, res) {
    const tester = await User.getUsers();
    console.log("testerID", tester[0].id);
    console.log("params", req.params);
    const id = req.params.userId;
    const response = await User.getUserById(id);

    res.status(200).json({
      response,
    });
  }

  async addOneUser(req, res) {
    const { firstname, lastname, age } = req.body
    const address = req.body.address;
    const user = await User.addNewUser(firstname, lastname, age, address);

    res.redirect("/users");
  }

  async updateOneUserById(req, res) {
    console.log("Params", req.params);
    console.log("Body", req.body);
    const id = req.params.userId;
    const updatedUser = req.body;
    const user = await User.updateUserById(id, updatedUser);

    res.redirect("/users");
  }

  async deleteOneRecord(req, res) {
    console.log(req.params);
    const id = req.params.userId;
    const response = await User.removeUserById(id);

    res.redirect("/users");
  }
}
