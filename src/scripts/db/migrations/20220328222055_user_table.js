/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (t) => {
    t.increments('id').unsigned().primary();

    t.string('firstname').notNull();
    t.string('lastname').notNull();
    t.integer('age').nullable();
    t.text('address').nullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('users'),

  ]);
};
