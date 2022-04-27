import { expect } from "chai";
import { async } from "regenerator-runtime";
import User from ".";
import { populateUsers, purgeUsersTable } from "../../helpers/tests";
import db from "../../lib/knex";

describe("User Model", () => {
  beforeAll(async () => {
    await populateUsers();
  });
  afterAll(async () => {
    await purgeUsersTable();
    await db.destroy();
  });
  it("Should fetch all users", async () => {
    const users = await User.getUsers();
    expect(users.length).to.eq(11);
  });

  it("Should fetch a user using their id", async () => {
    const user = await User.getUserById(1);
    //console.log(user);
    expect(user[0].id).to.eq(1);
  });

  it("Expect to add user ", async () => {
    const user = await User.addNewUser(
      "TestFName",
      "TestLName",
      32,
      "46 Freshman Way"
    );
    const retrieve = db("users").where("firstname", "TestFName");
    //console.log(retrieve._statements[0].value);
    expect(retrieve._statements[0].value).to.eq("TestFName");
  });

  it("updates user, finding the user by Id", async () => {
    const user = await User.updateUserById(1, {
      firstname: "TestingUpdate",
      lastname: "TestingUpdateLname",
      age: 23,
      address: "24 Golden Path",
    })
      .then((data) => {
        // console.log("data", data);
        return db("users").where("id", data);
      })
      .then((response) => {
        // console.log("response", response);
        return response;
      });

    expect(user[0].firstname).to.eq("TestingUpdate");
    //expect(user[0].id).to.eq(1);
  });

  it("Expects to delete a user", async () => {
    const users = await User.removeUserById(1).then(() => {
      return db.select().table("users");
    });
    const amount = +users.length;

    expect(amount).to.eq(11);
  });
});
