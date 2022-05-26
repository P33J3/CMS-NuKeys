/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', (t) => {
    t.increments('id').unsigned().primary();
    t.string('email').notNull();
    t.string('firstname').notNull();
    t.string('lastname').notNull();
    t.integer('age').nullable();
    t.text('address').nullable();
    t.integer('profileId');
    t.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
