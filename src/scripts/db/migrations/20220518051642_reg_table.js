/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('regusers', (t) => {
    t.increments('id').unsigned().primary();

    t.string('username').notNull();
    t.string('password').notNull();

  });
};

/**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
exports.down = function (knex) {
  return knex.schema.dropTable('regusers');
};
