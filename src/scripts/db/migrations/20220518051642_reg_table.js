/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('regusers', (t) => {
    t.increments('id').unsigned().primary();
    t.string('username').notNull();
    t.string('password').notNull();
    t.timestamp('last_login').defaultTo(knex.fn.now());
    t.integer('profileId').references('id').inTable('users');
    t.string('email').notNull();
    t.string('firstname').notNull();
    t.string('lastname').notNull();
    t.integer('age').nullable();
    t.text('address').nullable();
    t.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

/**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
exports.down = function (knex) {
  return knex.schema.dropTable('regusers');
};
