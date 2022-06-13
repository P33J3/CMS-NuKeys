/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const user = require('../temp/sample_users');
const reg = require('../temp/sample_Regusers');
const docs = require('../temp/sample_documents');

exports.seed = async function (knex, Promise) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('regusers').del();
  await knex('documents').del();
  await user.seed(knex, Promise)
    .then(() => reg.seed(knex, Promise)).then(() => docs.seed(knex, Promise));
};
