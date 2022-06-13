/* eslint-disable no-await-in-loop */
const faker = require('faker');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('documents').del();
  for (let i = 0; i < 10; i += 1) {
    await knex('documents').insert([
      {
        title: faker.lorem.words(3),
        body: faker.lorem.words(8),
        // author_id: faker.internet.userName(),
        // profileId: 2,
      },
    ]);
  }
};
