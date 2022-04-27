/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
import faker from "faker";
import db from "../../lib/knex";

export async function populateUsers() {
  await db("users").del();
  await db.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1");
  for (let i = 0; i < 10; i += 1) {
    await db("users").insert([
      {
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        age: faker.random.number(),
        address: faker.address.secondaryAddress(),
      },
    ]);
  }
  await db("users").insert([
    {
      firstname: "Peter",
      lastname: "Bond",
      age: 70,
      address: "James Bond Beach",
    },
  ]);
}

export async function purgeUsersTable() {
  await db("users").del();
  await db.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1");
}
