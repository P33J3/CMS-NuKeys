/* eslint-disable no-await-in-loop */
const faker = require('faker');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
 // await knex('regusers').del();
  for (let i = 0; i < 10; i += 1) {
    await knex('regusers').insert([
      {
        id: faker.random.number(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
      },
    ]);
  }
};
