/* eslint-disable no-await-in-loop */
const faker = require('faker');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  for (let i = 0; i < 10; i += 1) {
    await knex('users').insert([
      {
        // id: faker.random.number(),
        email: faker.internet.email(),
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        age: faker.random.number(),
        address: faker.address.secondaryAddress(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
      },
    ]);
  }
};
